import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function run() {
  console.log('Adding Made in Italy and Lost Stones fields to AboutPage model...');

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'madeInItalyTitle',
    displayName: 'Made in Italy Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'madeInItalySubtitle',
    displayName: 'Made in Italy Subtitle',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'lostStonesTitle',
    displayName: 'Lost Stones Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'lostStonesSubtitle',
    displayName: 'Lost Stones Subtitle',
    type: 'STRING',
  });

  try {
    const response = await client.run(true);
    console.log('Migration Result:', JSON.stringify(response, null, 2));
    console.log('Migration successful!');
  } catch (err) {
    console.error('Error running migration:', err);
    if (err.response && err.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(err.response.errors, null, 2));
    }
  }
}

run().catch(console.error);
