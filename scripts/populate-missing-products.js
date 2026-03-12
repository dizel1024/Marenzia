import 'dotenv/config';
import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { GraphQLClient, gql } from 'graphql-request';

const HYGRAPH_API = process.env.HYGRAPH_CONTENT_API;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

const client = new GraphQLClient(HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_TOKEN}`,
  },
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function getCategoryBySlug(slug) {
  const query = gql`
    query GetCategory($slug: String!) {
      category(where: { slug: $slug }, stage: PUBLISHED) {
        id
      }
    }
  `;
  const res = await client.request(query, { slug });
  return res.category ? res.category.id : null;
}

async function getCollectionBySlug(slug) {
  const query = gql`
    query GetCollection($slug: String!) {
      collection(where: { slug: $slug }, stage: PUBLISHED) {
        id
      }
    }
  `;
  const res = await client.request(query, { slug });
  return res.collection ? res.collection.id : null;
}

async function uploadAsset(localPath) {
  await sleep(1000);
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  const absolutePath = path.join(process.cwd(), 'public', cleanPath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`File not found: ${absolutePath}`);
    return null;
  }

  const fileName = path.basename(absolutePath);

  try {
    const mutation = gql`
      mutation CreateAsset($fileName: String!) {
        createAsset(data: { fileName: $fileName }) {
          id
          upload {
            requestPostData {
              url date key signature algorithm policy credential securityToken
            }
          }
        }
      }
    `;

    const res = await client.request(mutation, { fileName });
    const assetId = res.createAsset.id;
    const postData = res.createAsset.upload.requestPostData;

    const form = new FormData();
    form.append('X-Amz-Date', postData.date);
    form.append('key', postData.key);
    form.append('X-Amz-Signature', postData.signature);
    form.append('X-Amz-Algorithm', postData.algorithm);
    form.append('policy', postData.policy);
    form.append('X-Amz-Credential', postData.credential);
    form.append('X-Amz-Security-Token', postData.securityToken);
    form.append('file', fs.readFileSync(absolutePath), { filename: fileName });

    const uploadRes = await fetch(postData.url, { method: 'POST', body: form });

    if (uploadRes.status === 204 || uploadRes.status === 200) {
      console.log(`Uploaded ${localPath} -> ${assetId}`);
      // publish immediately
      await sleep(1500);
      try {
        await client.request(gql`mutation { publishAsset(where: { id: "${assetId}" }, to: PUBLISHED) { id } }`);
      } catch(e) { console.log('Publish asset delayed'); }
      return assetId;
    } else {
      console.error(`S3 Upload failed for ${localPath}`);
      return null;
    }
  } catch (error) {
    console.error(`Error in uploadAsset for ${localPath}:`, error.message);
    return null;
  }
}

const missingProducts = [
  { slug: 'bath-product-3', title: 'סט אביזרי אבן מונוליטי No. 03', category: 'accessories', image: '/assets/images/nav_bath_accessories_color.png' },
  { slug: 'bath-product-4', title: 'ברז אבן מונוליטי No. 04', category: 'taps', image: '/assets/images/nav_bath_taps_color.png' },
  { slug: 'bath-product-5', title: 'מתלה אבן מונוליטי No. 05', category: 'rails', image: '/assets/images/nav_bath_towel_stand_color.png' },
  { slug: 'bath-product-6', title: 'כיור אבן מונוליטי No. 06', category: 'basins', image: '/assets/images/nav_bath_basins_color.png' },
  { slug: 'bath-product-7', title: 'יחידת מדפים אבן מונוליטי No. 07', category: 'storage', image: '/assets/images/nav_bath_storage_color.png' },
  { slug: 'decor-product-1', title: 'מחזיק נר אבן מונוליטי No. 01', category: 'fragrance', image: '/assets/images/nav_decor_fragrance.png' },
  { slug: 'decor-product-2', title: 'וו תלייה אבן מונוליטי No. 02', category: 'racks', image: '/assets/images/nav_decor_racks.png' },
  { slug: 'decor-product-3', title: 'תאורת אבן מונוליטי No. 03', category: 'lighting', image: '/assets/images/nav_decor_lighting.png' },
  { slug: 'decor-product-4', title: 'מראת אבן מונוליטי No. 04', category: 'mirrors', image: '/assets/images/nav_decor_mirrors.png' },
  { slug: 'decor-product-5', title: 'מגש אבן מונוליטי No. 05', category: 'home-accessories', image: '/assets/images/nav_decor_home_acc.png' },
];

async function run() {
  console.log('Fetching Monolith collection ID...');
  const monolithId = await getCollectionBySlug('monolith');
  if (!monolithId) throw new Error("Could not find 'monolith' collection. Did you migrate it already?");

  console.log('Uploading and creating missing products...');
  for (const p of missingProducts) {
    console.log(`\nProcessing ${p.title}...`);
    const categoryId = await getCategoryBySlug(p.category);
    if (!categoryId) {
        console.warn(`Category ${p.category} not found for ${p.title}, skipping.`);
        continue;
    }

    const imageId = await uploadAsset(p.image);

    const checkQuery = gql`query { products(where: { slug: "${p.slug}" }) { id } }`;
    const checkData = await client.request(checkQuery);
    
    // Minimal generic specs and finishes to ensure template doesn't crash empty
    const desc = "עיצוב אדריכלי מינימליסטי המבטא כוח, שקט ואלגנטיות בחלל.";
    const specs = "מיוצר מהחומרים האיכותיים ביותר\nפרטים מדויקים\nמידות מותאמות אישית.";
    const finishes = "טקסטורה טבעית\nגימור עדין במכונה";

    if (checkData.products.length > 0) {
      console.log(`Product ${p.slug} already exists! Skipping creation.`);
      continue;
    }

    const createMutation = gql`
      mutation CreateProduct(
        $title: String!, 
        $slug: String!, 
        $description: String, 
        $specs: String, 
        $finishes: String, 
        $mainImageId: ID, 
        $categoryId: ID,
        $collectionId: ID
      ) {
        createProduct(
          data: {
            title: $title,
            slug: $slug,
            overview: { children: [{ type: "paragraph", children: [{ text: $description }] }] },
            specifications: { children: [{ type: "paragraph", children: [{ text: $specs }] }] },
            finishes: { children: [{ type: "paragraph", children: [{ text: $finishes }] }] },
            mainImage: { connect: { id: $mainImageId } },
            category: { connect: { id: $categoryId } },
            productCollection: { connect: { id: $collectionId } }
          }
        ) {
          id
        }
      }
    `;

    const createNoImageMutation = gql`
      mutation CreateProductNoImage(
        $title: String!, 
        $slug: String!, 
        $description: String, 
        $specs: String, 
        $finishes: String, 
        $categoryId: ID,
        $collectionId: ID
      ) {
        createProduct(
          data: {
            title: $title,
            slug: $slug,
            overview: { children: [{ type: "paragraph", children: [{ text: $description }] }] },
            specifications: { children: [{ type: "paragraph", children: [{ text: $specs }] }] },
            finishes: { children: [{ type: "paragraph", children: [{ text: $finishes }] }] },
            category: { connect: { id: $categoryId } },
            productCollection: { connect: { id: $collectionId } }
          }
        ) {
          id
        }
      }
    `;

    try {
        let res;
        if (imageId) {
          res = await client.request(createMutation, {
              title: p.title,
              slug: p.slug,
              description: desc,
              specs: specs,
              finishes: finishes,
              mainImageId: imageId,
              categoryId: categoryId,
              collectionId: monolithId
          });
        } else {
          res = await client.request(createNoImageMutation, {
              title: p.title,
              slug: p.slug,
              description: desc,
              specs: specs,
              finishes: finishes,
              categoryId: categoryId,
              collectionId: monolithId
          });
        }
        const newId = res.createProduct.id;
        console.log(`Created product ${newId}`);
        await sleep(1000);
        await client.request(gql`mutation { publishProduct(where: { id: "${newId}" }, to: PUBLISHED) { id } }`);
        console.log(`Published ${p.title}`);
    } catch(e) {
        console.error("Failed to create product", e.message);
    }
  }
}

run().catch(console.error);
