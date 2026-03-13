import 'dotenv/config';
import { GraphQLClient, gql } from 'graphql-request';

const HYGRAPH_API = process.env.HYGRAPH_CONTENT_API;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

const client = new GraphQLClient(HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_TOKEN}`,
  },
});

async function run() {
  console.log('Creating vanity category in Hygraph...');

  // Create the Category entry
  const CREATE_CATEGORY = gql`
    mutation CreateCategory {
      createCategory(data: {
        title: "ארון אמבטיה"
        slug: "vanity"
        type: BATH
      }) {
        id
        title
        slug
      }
    }
  `;

  try {
    const result = await client.request(CREATE_CATEGORY);
    console.log('Category created:', JSON.stringify(result, null, 2));
    
    // Publish it
    const PUBLISH = gql`
      mutation PublishCategory($id: ID!) {
        publishCategory(where: { id: $id }) {
          id
        }
      }
    `;
    await client.request(PUBLISH, { id: result.createCategory.id });
    console.log('Category published!');
  } catch (err) {
    if (err.response?.errors?.[0]?.message?.includes('unique')) {
      console.log('Category "vanity" already exists, skipping.');
    } else {
      console.error('Error:', err.response?.errors || err);
    }
  }
}

run().catch(console.error);
