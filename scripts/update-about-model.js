import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function run() {
  console.log('Adding explicit fields to AboutPage model...');

  // 1. Editorial Fields
  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'editorialTitle',
    displayName: 'Editorial Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'editorialText1',
    displayName: 'Editorial Text 1',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'editorialText2',
    displayName: 'Editorial Text 2',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  // 2. Philosophy Fields
  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'philosophyTitle',
    displayName: 'Philosophy Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'philosophyText',
    displayName: 'Philosophy Text',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  client.createRelationalField({
    modelApiId: 'AboutPage',
    apiId: 'philosophyImage',
    displayName: 'Philosophy Image',
    type: 'ASSET',
    reverseField: { apiId: 'aboutPagePhilosophySection', modelApiId: 'Asset', displayName: 'About Page (Philosophy)' },
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'philosophyLinkText',
    displayName: 'Philosophy Link Text',
    type: 'STRING',
  });

  // 3. Monolith Fields
  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'monolithTitle',
    displayName: 'Monolith Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'monolithText',
    displayName: 'Monolith Text',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  client.createRelationalField({
    modelApiId: 'AboutPage',
    apiId: 'monolithImage',
    displayName: 'Monolith Image',
    type: 'ASSET',
    reverseField: { apiId: 'aboutPageMonolithSection', modelApiId: 'Asset', displayName: 'About Page (Monolith)' },
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'monolithLinkText',
    displayName: 'Monolith Link Text',
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
