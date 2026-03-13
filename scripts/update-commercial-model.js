import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function run() {
  console.log('Creating CommercialPage model and adding fields...');

  // Create Model
  client.createModel({
    apiId: 'CommercialPage',
    apiIdPlural: 'CommercialPages',
    displayName: 'Commercial Page',
  });

  client.createRelationalField({
    modelApiId: 'CommercialPage',
    apiId: 'heroImage',
    displayName: 'Hero Image',
    type: 'ASSET',
    reverseField: { apiId: 'commercialPageHero', modelApiId: 'Asset', displayName: 'Commercial Page (Hero)' },
  });

  client.createSimpleField({
    modelApiId: 'CommercialPage',
    apiId: 'heroTitle',
    displayName: 'Hero Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'CommercialPage',
    apiId: 'heroSubtitle',
    displayName: 'Hero Subtitle',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'CommercialPage',
    apiId: 'introTitle',
    displayName: 'Intro Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'CommercialPage',
    apiId: 'introText',
    displayName: 'Intro Text',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  // Services
  for (let i = 1; i <= 3; i++) {
    client.createSimpleField({
      modelApiId: 'CommercialPage',
      apiId: `service${i}Title`,
      displayName: `Service ${i} Title`,
      type: 'STRING',
    });
    client.createSimpleField({
      modelApiId: 'CommercialPage',
      apiId: `service${i}Text`,
      displayName: `Service ${i} Text`,
      type: 'STRING',
      formConfig: { renderer: 'MULTI_LINE' }
    });
  }

  // Form Section
  client.createSimpleField({
    modelApiId: 'CommercialPage',
    apiId: 'formTitle',
    displayName: 'Form Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'CommercialPage',
    apiId: 'formSubtitle',
    displayName: 'Form Subtitle',
    type: 'STRING',
  });

  try {
    const response = await client.run(true);
    console.log('Migration Result:', JSON.stringify(response, null, 2));
    console.log('CommercialPage creation successful!');
  } catch (err) {
    console.error('Error running migration:', err);
    if (err.response && err.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(err.response.errors, null, 2));
    }
  }
}

run().catch(console.error);
