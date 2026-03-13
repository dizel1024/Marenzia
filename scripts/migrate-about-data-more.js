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
  console.log('Fetching existing About Page data...');
  const query = gql`
    query {
      aboutPages(first: 1) { id }
    }
  `;
  const { aboutPages } = await client.request(query);
  
  if (!aboutPages || aboutPages.length === 0) { return; }
  const aboutId = aboutPages[0].id;
  
  const payload = {
    madeInItalyTitle: 'תוצרת איטליה',
    madeInItalySubtitle: 'אומנות ומסורת',
    lostStonesTitle: 'אבנים אבודות',
    lostStonesSubtitle: 'שימור מורשת'
  };

  const updateMutation = gql`
    mutation UpdateAboutData($id: ID!, $data: AboutPageUpdateInput!) {
      updateAboutPage(where: { id: $id }, data: $data) { id }
    }
  `;
  await client.request(updateMutation, { id: aboutId, data: payload });
  
  const publishMutation = gql`
    mutation Publish($id: ID!) {
      publishAboutPage(where: { id: $id }, to: PUBLISHED) { id }
    }
  `;
  await client.request(publishMutation, { id: aboutId });
  console.log('Successfully published Made in Italy / Lost Stones text!');
}

run().catch(console.error);
