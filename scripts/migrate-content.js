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

const UPLOAD_URL = `${HYGRAPH_API}/upload`;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function uploadAsset(localPath) {
  await sleep(1000); // Wait 1s between uploads
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  const absolutePath = path.join(process.cwd(), 'public', cleanPath);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`File not found: ${absolutePath}`);
    return null;
  }

  const fileName = path.basename(absolutePath);

  try {
    // 1. Create Asset to get pre-signed URL
    const mutation = gql`
      mutation CreateAsset($fileName: String!) {
        createAsset(data: { fileName: $fileName }) {
          id
          upload {
            requestPostData {
              url
              date
              key
              signature
              algorithm
              policy
              credential
              securityToken
            }
          }
        }
      }
    `;

    const res = await client.request(mutation, { fileName });
    const assetId = res.createAsset.id;
    const postData = res.createAsset.upload.requestPostData;

    // 2. Upload file to S3
    const form = new FormData();
    form.append('X-Amz-Date', postData.date);
    form.append('key', postData.key);
    form.append('X-Amz-Signature', postData.signature);
    form.append('X-Amz-Algorithm', postData.algorithm);
    form.append('policy', postData.policy);
    form.append('X-Amz-Credential', postData.credential);
    form.append('X-Amz-Security-Token', postData.securityToken);
    form.append('file', fs.readFileSync(absolutePath), { filename: fileName });

    const uploadRes = await fetch(postData.url, {
      method: 'POST',
      body: form,
    });

    if (uploadRes.status === 204 || uploadRes.status === 200) {
      console.log(`Uploaded ${localPath} -> ${assetId}`);
      return assetId;
    } else {
      const errorText = await uploadRes.text();
      console.error(`S3 Upload failed for ${localPath}:`, errorText);
      return null;
    }
  } catch (error) {
    console.error(`Error in uploadAsset for ${localPath}:`, error);
    return null;
  }
}

async function publishAsset(id) {
    let ready = false;
    let attempts = 0;
    while (!ready && attempts < 20) {
        try {
            const mutation = gql`
              mutation PublishAsset($id: ID!) {
                publishAsset(where: { id: $id }, to: PUBLISHED) {
                  id
                }
              }
            `;
            await client.request(mutation, { id });
            ready = true;
            console.log(`Asset ${id} published.`);
        } catch (e) {
            console.log(`Asset ${id} not ready yet (attempt ${attempts + 1}), waiting...`);
            await sleep(2000);
            attempts++;
        }
    }
}

// Data to migrate
const stoneCategories = ['שיש', 'טרוורטין', 'קוורציט', 'אבן סינטר', 'אוניקס'];
const bathCategories = [
  { id: 'basins', name: 'כיורי רחצה', slug: 'basins' },
  { id: 'storage', name: 'ארונות אחסון ומדפים', slug: 'storage' },
  { id: 'accessories', name: 'אביזרי אמבטיה', slug: 'accessories' },
  { id: 'taps', name: 'ברזים ואביזרים', slug: 'taps' },
  { id: 'rails', name: 'מתלי מגבות', slug: 'rails' },
];
const decorCategories = [
  { id: 'fragrance', name: 'ניחוחות ומחזיקי נרות', slug: 'fragrance' },
  { id: 'racks', name: 'מתלים וווים', slug: 'racks' },
  { id: 'lighting', name: 'תאורה', slug: 'lighting' },
  { id: 'mirrors', name: 'מראות', slug: 'mirrors' },
  { id: 'home-accessories', name: 'אביזרי אמבטיה (דקור)', slug: 'home-accessories' },
];

const projects = [
  { title: 'Nouveau Penthouse', location: 'New York, NY', year: '2023', image: '/assets/images/img_38ac2d605600.webp', slug: 'nouveau-penthouse' },
  { title: 'Azure Coastal Villa', location: 'Malibu, CA', year: '2023', image: '/assets/images/img_13e3f89e94f3.webp', slug: 'azure-coastal-villa' },
  { title: 'The Monolith Hotel', location: 'Milan, IT', year: '2022', image: '/assets/images/img_c4c407d8b8f7.webp', slug: 'the-monolith-hotel' },
  { title: 'Carrara Showroom', location: 'Carrara, IT', year: '2022', image: '/assets/images/img_69be383dc846.webp', slug: 'carrara-showroom' },
  { title: 'Desert Retreat', location: 'Palm Springs, CA', year: '2021', image: '/assets/images/img_6ffab66ff533.webp', slug: 'desert-retreat' },
  { title: 'Highline Residence', location: 'Chelsea, NY', year: '2021', image: '/assets/images/img_a4d4fb32a3e9.webp', slug: 'highline-residence' },
];

const stones = [
    {
        name: 'ביאנקו קרארה',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'לבן',
        code: 'BC-01',
        toneDetails: 'לבן קלאסי עם גידים אפורים',
        porosity: 'נמוכה (0.3%)',
        origin: 'קרארה, איטליה',
        image: '/assets/images/stone_bianco_carrara_color.png'
    },
    {
        name: 'קרארה סטטואריו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'לבן',
        code: 'Hon-01',
        toneDetails: 'לבן טהור',
        porosity: 'נמוכה (0.3%)',
        origin: 'קרארה, איטליה',
        image: '/assets/images/stone_carrara_statuario_color.png'
    },
    {
        name: 'קלקטה אורו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'זהב',
        code: 'CO-02',
        toneDetails: 'לבן חם עם גידים מוזהבים',
        porosity: 'נמוכה (0.2%)',
        origin: 'קרארה, איטליה',
        image: '/assets/images/stone_calacatta_oro_color.png'
    }
    // ... adding more stones would be tedious, I'll add about 10 for demonstration
    // and let the user add the rest or provide a full list.
    // Actually, I'll extract more from the file using a regex if possible or just inclusion.
];

// I'll add more stones from the file in the actual script execution.

async function getOrCreateCategory(name, slug, type) {
  console.log(`Checking category: ${name}`);
  await sleep(500);
  const query = gql`
    query GetCategory($slug: String!) {
      category(where: { slug: $slug }, stage: DRAFT) {
        id
      }
    }
  `;
  const data = await client.request(query, { slug });
  if (data.category) {
    return data.category.id;
  }

  const mutation = gql`
    mutation CreateCategory($name: String!, $slug: String!, $type: CategoryType!) {
      createCategory(data: { title: $name, slug: $slug, type: $type }) {
        id
      }
    }
  `;
  const res = await client.request(mutation, { name, slug, type });
  const id = res.createCategory.id;
  await client.request(gql`mutation { publishCategory(where: { id: "${id}" }, to: PUBLISHED) { id } }`);
  return id;
}

async function getOrCreateProject(p, imageId) {
  await sleep(500);
  const query = gql`
    query GetProject($slug: String!) {
      project(where: { slug: $slug }, stage: DRAFT) {
        id
      }
    }
  `;
  const data = await client.request(query, { slug: p.slug });
  if (data.project) {
    return data.project.id;
  }

  const mutation = gql`
    mutation CreateProject($title: String!, $slug: String!, $location: String, $year: String, $imageId: ID) {
      createProject(data: {
        title: $title,
        slug: $slug,
        location: $location,
        year: $year,
        mainImage: { connect: { id: $imageId } }
      }) {
        id
      }
    }
  `;
  const res = await client.request(mutation, {
    title: p.title,
    slug: p.slug,
    location: p.location,
    year: p.year,
    imageId: imageId
  });
  const id = res.createProject.id;
  await client.request(gql`mutation { publishProject(where: { id: "${id}" }, to: PUBLISHED) { id } }`);
  return id;
}

async function getOrCreateStone(s, imageId, categoryId) {
  await sleep(300);
  const query = gql`
    query GetStone($name: String!) {
      stones(where: { name: $name }, stage: DRAFT) {
        id
      }
    }
  `;
  const data = await client.request(query, { name: s.name });
  if (data.stones && data.stones.length > 0) {
    return data.stones[0].id;
  }

  const mutation = gql`
    mutation CreateStone($name: String!, $type: String, $tone: String, $code: String, $toneDetails: String, $porosity: String, $origin: String, $imageId: ID, $categoryId: ID) {
      createStone(data: {
        name: $name,
        type: $type,
        tone: $tone,
        code: $code,
        toneDetails: $toneDetails,
        porosity: $porosity,
        origin: $origin,
        image: { connect: { id: $imageId } },
        category: { connect: { id: $categoryId } }
      }) {
        id
      }
    }
  `;
  const res = await client.request(mutation, {
    name: s.name,
    type: s.type,
    tone: s.tone,
    code: s.code,
    toneDetails: s.toneDetails,
    porosity: s.porosity,
    origin: s.origin,
    imageId: imageId,
    categoryId: categoryId
  });
  const id = res.createStone.id;
  await client.request(gql`mutation { publishStone(where: { id: "${id}" }, to: PUBLISHED) { id } }`);
  return id;
}

async function migrate() {
  console.log('Skipping cleanup (Permission restricted). Starting migration...');

  const assetMap = new Map();

  async function getAssetId(localPath) {
    if (!localPath) return null;
    if (assetMap.has(localPath)) return assetMap.get(localPath);
    const id = await uploadAsset(localPath);
    if (id) {
        await publishAsset(id);
        assetMap.set(localPath, id);
    }
    return id;
  }

  // 1. Migrate Categories
  const categoryMap = new Map();
  console.log('Migrating Categories...');

  for (const name of stoneCategories) {
    const slug = name === 'שיש' ? 'marble' : name === 'טרוורטין' ? 'travertine' : name === 'קוורציט' ? 'quartzite' : name === 'אבן סינטר' ? 'sintered-stone' : 'onyx';
    const id = await getOrCreateCategory(name, slug, 'STONE');
    categoryMap.set(name, id);
  }

  for (const cat of bathCategories) {
    const id = await getOrCreateCategory(cat.name, cat.slug, 'BATH');
    categoryMap.set(cat.slug, id);
  }

  for (const cat of decorCategories) {
    const id = await getOrCreateCategory(cat.name, cat.slug, 'DECOR');
    categoryMap.set(cat.slug, id);
  }

  // 2. Migrate Projects
  const projectMap = new Map();
  console.log('Migrating Projects...');
  for (const p of projects) {
    const assetId = await getAssetId(p.image);
    const id = await getOrCreateProject(p, assetId);
    projectMap.set(p.title, id);
  }

  // 3. Migrate Products (Bath)
  const bathProducts = [
    {
        id: 'product-1',
        slug: 'product-1',
        title: 'כיור אבן מונוליטי No. 01',
        category: 'basins',
        collectionSlug: 'monolith',
        stoneNames: ['ביאנקו קרארה', 'קרארה סטטואריו'],
        description: 'הצהרה ייחודית של צורה וחומריות. מגולף ביד מבלוק מונוליטי של שיש קרארה, ה-Vessel No. 01 חוקר את המתח שבין גיאומטריה ברוטליסטית לשימוש מעודן.',
        images: [
            '/assets/images/nav_bath_basins_color.png',
            '/assets/images/img_1c850df040e0.webp',
            '/assets/images/img_268319206c4d.webp'
        ],
        specs: 'ביאנקו קרארה, מושחז\n900W x 550D x 850H mm\n120 ק"ג\nטוסקנה, איטליה',
        finishes: 'מושחז (Honed)\nמלוטש (Polished)\nמוברש (Brushed)'
    },
    {
        id: 'product-2',
        slug: 'product-2',
        title: 'ארון אבן מונוליטי No. 02',
        category: 'storage',
        collectionSlug: 'monolith',
        stoneNames: ['ביאנקו קרארה'],
        description: 'יחידת אחסון אלגנטית המשלבת עץ אלון מושחר עם משטחי אבן טבעית. עיצוב המקצה מקום לשקט וסדר בחלל הרחצה.',
        images: [
            '/assets/images/nav_bath_storage_color.png',
            '/assets/images/img_13e3f89e94f3.webp',
            '/assets/images/img_c4c407d8b8f7.webp'
        ],
        specs: 'אלון מושחר, אבן גריי\n1200W x 500D x 400H mm\n45 ק"ג\nייצור מקומי',
        finishes: 'מט עמוק\nטקסטורה טבעית'
    }
  ];

  // 4. Migrate Stones
  console.log('Migrating Stones...');
  const stonesRaw = fs.readFileSync(path.join(process.cwd(), 'data/stones.json'), 'utf8');
  const allStones = eval(stonesRaw); 

  const stoneMap = new Map();
  for (const s of allStones) {
    const assetId = await getAssetId(s.image);
    const categoryId = categoryMap.get(s.category);
    const id = await getOrCreateStone(s, assetId, categoryId);
    stoneMap.set(s.name, id);
  }

  // Collections Store for relations
  const collectionIdMap = new Map();
  const collectionsData = [
    { slug: 'monolith', title: 'סדרת המונולית', category: 'אבן אדריכלית / בזלת כהה', image: '/assets/images/collection_monolith_color.png' },
    { slug: 'ethereal', title: 'אגן אתרי', category: 'כלים סניטריים / אבולוציית קרארה', image: '/assets/images/collection_ethereal_color.png' },
    { slug: 'obsidian', title: 'טקסטורות אובסידיאן', category: 'ריהוט / זכוכית וולקנית', image: '/assets/images/collection_obsidian_color.png' },
    { slug: 'travertine', title: 'מהות הטרברטין', category: 'משטחים אנכיים / גידים גולמיים', image: '/assets/images/collection_travertine_color.png' }
  ];

  console.log('Pre-migrating Collections...');
  for (const c of collectionsData) {
    const imgId = await getAssetId(c.image);
    const checkQuery = gql`query { collection(where: { slug: "${c.slug}" }, stage: DRAFT) { id } }`;
    const checkData = await client.request(checkQuery);
    let id;
    if (checkData.collection) {
      id = checkData.collection.id;
    } else {
      const createColl = gql`
        mutation CreateColl($title: String!, $slug: String!, $cat: String, $imgId: ID) {
          createCollection(data: { title: $title, slug: $slug, category: $cat, image: { connect: { id: $imgId } } }) { id }
        }
      `;
      const cRes = await client.request(createColl, { ...c, imgId });
      id = cRes.createCollection.id;
      await client.request(gql`mutation { publishCollection(where: { id: "${id}" }, to: PUBLISHED) { id } }`);
    }
    collectionIdMap.set(c.slug, id);
  }

  console.log('Migrating Bath Products with relations...');
  for (const p of bathProducts) {
    const mainImageId = await getAssetId(p.images[0]);
    const categoryId = categoryMap.get(p.category);
    const collectionId = collectionIdMap.get(p.collectionSlug);
    const stoneIds = (p.stoneNames || []).map(name => stoneMap.get(name)).filter(Boolean);

    await sleep(300);
    // Use upsert or delete/recreate if needed, but here we update if exists
    const checkQuery = gql`query { products(where: { slug: "${p.slug}" }, stage: DRAFT) { id } }`;
    const checkData = await client.request(checkQuery);
    
    const mutation = gql`
      mutation UpdateProduct(
        $slug: String!, 
        $title: String!, 
        $description: String, 
        $specs: String, 
        $finishes: String, 
        $mainImageId: ID, 
        $categoryId: ID,
        $collectionId: ID,
        $stoneConnects: [StoneWhereUniqueInput!]
      ) {
        updateProduct(
          where: { slug: $slug },
          data: {
            title: $title,
            overview: { children: [{ type: "paragraph", children: [{ text: $description }] }] },
            specifications: { children: [{ type: "paragraph", children: [{ text: $specs }] }] },
            finishes: { children: [{ type: "paragraph", children: [{ text: $finishes }] }] },
            mainImage: { connect: { id: $mainImageId } },
            category: { connect: { id: $categoryId } },
            productCollection: { connect: { id: $collectionId } },
            productMaterials: { set: $stoneConnects }
          }
        ) {
          id
        }
      }
    `;

    const createMutation = gql`
      mutation CreateProduct(
        $title: String!, 
        $slug: String!, 
        $description: String, 
        $specs: String, 
        $finishes: String, 
        $mainImageId: ID, 
        $categoryId: ID,
        $collectionId: ID,
        $stoneConnects: [StoneWhereUniqueInput!]
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
            productCollection: { connect: { id: $collectionId } },
            productMaterials: { connect: $stoneConnects }
          }
        ) {
          id
        }
      }
    `;

    console.log(`Migrating product: ${p.title} (slug: ${p.slug})`);
    console.log(`- categoryId: ${categoryId}`);
    console.log(`- collectionId: ${collectionId}`);
    console.log(`- stoneIds: ${JSON.stringify(stoneIds)}`);

    let id;
    if (checkData.products.length > 0) {
      const res = await client.request(mutation, {
        slug: p.slug,
        title: p.title,
        description: p.description,
        specs: p.specs,
        finishes: p.finishes,
        mainImageId: mainImageId,
        categoryId: categoryId,
        collectionId: collectionId,
        stoneConnects: stoneIds.map(id => ({ id }))
      });
      id = res.updateProduct.id;
    } else {
      const res = await client.request(createMutation, {
        title: p.title,
        slug: p.slug,
        description: p.description,
        specs: p.specs,
        finishes: p.finishes,
        mainImageId: mainImageId,
        categoryId: categoryId,
        collectionId: collectionId,
        stoneConnects: stoneIds.map(id => ({ id }))
      });
      id = res.createProduct.id;
    }
    await client.request(gql`mutation { publishProduct(where: { id: "${id}" }, to: PUBLISHED) { id } }`);
  }

  // 5. Migrate Static Pages
  console.log('Migrating Static Pages (About, Philosophy, Process, Collections)...');

  // About Page
  const aboutData = {
    heroImage: '/assets/images/about_hero.png',
    heroTitle: 'הסיפור שלנו',
    editorialBlocks: [
      { label: '01 / מורשת משפחתית', text: 'שורשינו נטועים בלב קרארה...' },
      { label: '01 / מורשת משפחתית', text: 'כיום, אנו משתפים פעולה עם אנשי חזון עולמיים...' }
    ],
    quote: '״העיצוב פוגש את האבן הטבעית״',
    splitSections: [
      { title: 'פילוסופיית העיצוב שלנו', text: 'חקרו את המפגש בין צורה להיסטוריה גאולוגית...', image: '/assets/images/about_philosophy_1.png', link: '/philosophy' },
      { title: 'סדרת המונוליטים', text: 'אלמנטים אדריכליים לחדר הרחצה המגולפים מבלוקים בודדים...', image: '/assets/images/about_philosophy_2.png', link: '/collections' }
    ],
    madeInItalyImage: '/assets/images/about_made_in_italy.png',
    lostStonesImage: '/assets/images/about_lost_stones.png',
    footerBgImage: '/assets/images/about_craftsman.png',
    footerQuote: 'כל פריט הוא דיאלוג בין טבע גולמי לדיוק אדריכלי מעודן.'
  };

  const aboutHeroId = await getAssetId(aboutData.heroImage);
  const aboutItalyId = await getAssetId(aboutData.madeInItalyImage);
  const aboutLostId = await getAssetId(aboutData.lostStonesImage);
  const aboutFooterId = await getAssetId(aboutData.footerBgImage);

  const createAbout = gql`
    mutation CreateAbout($heroId: ID, $heroTitle: String, $blocks: Json, $quote: String, $split: Json, $italyId: ID, $lostId: ID, $footerId: ID, $fQuote: String) {
      createAboutPage(data: {
        heroImage: { connect: { id: $heroId } },
        heroTitle: $heroTitle,
        editorialBlocks: $blocks,
        quote: $quote,
        splitSections: $split,
        madeInItalyImage: { connect: { id: $italyId } },
        lostStonesImage: { connect: { id: $lostId } },
        footerBgImage: { connect: { id: $footerId } },
        footerQuote: $fQuote
      }) { id }
    }
  `;
  // ... (this was already correct in the mutation name, but let's double check the others)

  // Philosophy
  const createPhil = gql`
    mutation CreatePhil($heroId: ID, $sub: String, $title: String, $text: String, $heritage: Json, $aTitle: String, $aText: String, $aMain: ID, $aSec: ID, $values: Json) {
      createPhilosophyPage(data: {
        heroImage: { connect: { id: $heroId } },
        heroSubtitle: $sub,
        philosophyTitle: $title,
        philosophyText: { children: [{ type: "paragraph", children: [{ text: $text }] }] },
        heritageItems: $heritage,
        atelierTitle: $aTitle,
        atelierText: { children: [{ type: "paragraph", children: [{ text: $aText }] }] },
        atelierMainImage: { connect: { id: $aMain } },
        atelierSecondaryImage: { connect: { id: $aSec } },
        values: $values
      }) { id }
    }
  `;

  // Process
  const createProc = gql`
    mutation CreateProc($heroId: ID, $title: String, $sub: String, $sections: Json, $feat: Json, $exec: Json, $ctaT: String, $ctaS: String) {
      createProcessPage(data: {
        heroImage: { connect: { id: $heroId } },
        heroTitle: $title,
        heroSubtitle: $sub,
        editorialSections: $sections,
        features: $feat,
        executionDetails: $exec,
        ctaTitle: $ctaT,
        ctaSubtitle: $ctaS
      }) { id }
    }
  `;

  const aboutRes = await client.request(createAbout, {
    heroId: aboutHeroId,
    heroTitle: aboutData.heroTitle,
    blocks: aboutData.editorialBlocks,
    quote: aboutData.quote,
    split: aboutData.splitSections,
    italyId: aboutItalyId,
    lostId: aboutLostId,
    footerId: aboutFooterId,
    fQuote: aboutData.footerQuote
  });
  await client.request(gql`mutation { publishAboutPage(where: { id: "${aboutRes.createAboutPage.id}" }, to: PUBLISHED) { id } }`);

  // Philosophy Page Migration
  const philData = {
    heroImage: '/assets/images/img_92084469d381.webp',
    heroSubtitle: 'המניפסט השקט',
    philosophyTitle: '״השתיקה היא החומר החזק ביותר שלנו.״',
    philosophyText: 'בעידן של רעש, אנו מוצאים כוח במה שלא נאמר...',
    heritageItems: [
      { year: '1924', title: 'החציבה הראשונה', image: '/assets/images/img_bca9da9a0090.webp' },
      { year: '1948', title: 'סדנת המאסטר', image: '/assets/images/img_07bfec56a32b.webp' },
      { year: '1965', title: 'אופקים גלובליים', image: '/assets/images/img_c5957e3de084.webp' },
      { year: '1982', title: 'החומר הטהור', image: '/assets/images/img_e0078a8310f5.webp' }
    ],
    atelierTitle: 'מונחה על ידי היד, לא הכלי',
    atelierText: 'כל לוח שנכנס לאטלייה שלנו מטופל כישות חיה...',
    atelierMainImage: '/assets/images/img_256ac227f6e9.webp',
    atelierSecondaryImage: '/assets/images/img_2add46ef9f45.webp',
    values: [
      { title: 'אומנות', description: 'ידע דורי פוגש דיוק עכשווי...' },
      { title: 'דיוק', description: 'סובלנות הנמדדת במיקרונים...' },
      { title: 'שתיקה', description: 'האסתטיקה של החיסור...' },
      { title: 'אור', description: 'אבן היא כלום ללא משחקי האור...' }
    ]
  };

  const philHeroId = await getAssetId(philData.heroImage);
  const philAtelierMainId = await getAssetId(philData.atelierMainImage);
  const philAtelierSecId = await getAssetId(philData.atelierSecondaryImage);
  const heritageWithIds = [];
  for (const item of philData.heritageItems) {
    const imgId = await getAssetId(item.image);
    heritageWithIds.push({ ...item, imageId: imgId });
  }

  const philRes = await client.request(createPhil, {
    heroId: philHeroId,
    sub: philData.heroSubtitle,
    title: philData.philosophyTitle,
    text: philData.philosophyText,
    heritage: heritageWithIds,
    aTitle: philData.atelierTitle,
    aText: philData.atelierText,
    aMain: philAtelierMainId,
    aSec: philAtelierSecId,
    values: philData.values
  });
  await client.request(gql`mutation { publishPhilosophyPage(where: { id: "${philRes.createPhilosophyPage.id}" }, to: PUBLISHED) { id } }`);

  // Process Page Data
  const procData = {
    heroImage: '/assets/images/process_hero_v2.png',
    heroTitle: 'המסלול המשותף',
    heroSubtitle: 'שותפות ייעודית לאדריכלים ומעצבי פנים.',
    editorialSections: [
      { label: '01 / חומריות', title: 'נוצר באופן בלעדי למענכם', body: 'אין שתי פיסות אבן זהות...', image: '/assets/images/process_materiality_v2.png' },
      { label: '02 / ייעוץ', title: 'ייעוץ עיצובי ללא עלות', body: 'אנו מסייעים בתהליך הקפדני...', image: '/assets/images/process_advisory_v2.png' },
      { label: '03 / סינרגיה', title: 'שירות הסיוע העיצובי שלנו', body: 'בעבודה צמודה עם הצוות הקריאטיבי...', image: '/assets/images/process_synergy_v2.png' },
      { label: '04 / ביצוע', title: 'סיוע באתר הבנייה', body: 'עשורים של ניסיון בשטח לימדו אותנו...', image: '/assets/images/process_execution_v2.png' }
    ],
    features: ['אינטגרציית CAD', 'בדיקות מאמץ חומרים', 'פרטי נגרות מותאמים אישית'],
    executionDetails: {
      logistics: 'משלוח "כפפות לבנות" מדלת לדלת...',
      advisory: 'מנהלי אתרים ייעודיים נוכחים...'
    },
    ctaTitle: 'רוממו את הפרויקט הבא שלכם עם Marenzia.',
    ctaSubtitle: 'בקשו מומחה ייעודי לסטודיו האדריכלי שלכם.'
  };

  const procHeroId = await getAssetId(procData.heroImage);
  const sectionsWithIds = [];
  for (const s of procData.editorialSections) {
    const imgId = await getAssetId(s.image);
    sectionsWithIds.push({ ...s, imageId: imgId });
  }
  const procRes = await client.request(createProc, {
    heroId: procHeroId,
    title: procData.heroTitle,
    sub: procData.heroSubtitle,
    sections: sectionsWithIds,
    feat: procData.features,
    exec: procData.executionDetails,
    ctaT: procData.ctaTitle,
    ctaS: procData.ctaSubtitle
  });
  await client.request(gql`mutation { publishProcessPage(where: { id: "${procRes.createProcessPage.id}" }, to: PUBLISHED) { id } }`);

  const collectionIds = Array.from(collectionIdMap.values());
  const createCollPage = gql`
    mutation CreateCollPage($title: String, $intro: String) {
      createCollectionsPage(data: {
        title: $title,
        introText: $intro,
        collections: { connect: [${collectionIds.map(id => `{ id: "${id}" }`).join(', ')}] }
      }) { id }
    }
  `;
  const cpRes = await client.request(createCollPage, {
    title: 'קולקציות',
    intro: 'מבחר אוצר של משטחים אדריכליים...'
  });
  await client.request(gql`mutation { publishCollectionsPage(where: { id: "${cpRes.createCollectionsPage.id}" }, to: PUBLISHED) { id } }`);

  console.log('Migration completed successfully!');
}

migrate().catch(console.error);
