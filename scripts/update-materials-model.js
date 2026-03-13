import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function run() {
  console.log('Creating MaterialsPage model and adding fields...');

  // Create Model
  client.createModel({
    apiId: 'MaterialsPage',
    apiIdPlural: 'MaterialsPages',
    displayName: 'Materials Page',
  });

  client.createRelationalField({
    modelApiId: 'MaterialsPage',
    apiId: 'heroImage',
    displayName: 'Hero Image',
    type: 'ASSET',
    reverseField: { apiId: 'materialsPageHero', modelApiId: 'Asset', displayName: 'Materials Page (Hero)' },
  });

  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'heroTitle',
    displayName: 'Hero Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'heroSubtitle',
    displayName: 'Hero Subtitle',
    type: 'STRING',
  });

  // Story Block 1
  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'storyTitle1',
    displayName: 'Story Title 1',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'storyText1',
    displayName: 'Story Text 1',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  client.createRelationalField({
    modelApiId: 'MaterialsPage',
    apiId: 'storyImage1',
    displayName: 'Story Image 1',
    type: 'ASSET',
    reverseField: { apiId: 'materialsStoryImg1', modelApiId: 'Asset', displayName: 'Materials Story (Img 1)' },
  });

  // Story Block 2
  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'storyTitle2',
    displayName: 'Story Title 2',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'storyText2',
    displayName: 'Story Text 2',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  client.createRelationalField({
    modelApiId: 'MaterialsPage',
    apiId: 'storyImage2',
    displayName: 'Story Image 2',
    type: 'ASSET',
    reverseField: { apiId: 'materialsStoryImg2', modelApiId: 'Asset', displayName: 'Materials Story (Img 2)' },
  });

  // Sourcing Locations Data
  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'sourcingTitle',
    displayName: 'Sourcing Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'MaterialsPage',
    apiId: 'sourcingText',
    displayName: 'Sourcing Text',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  try {
    const response = await client.run(true);
    console.log('Migration Result:', JSON.stringify(response, null, 2));
    console.log('MaterialsPage creation successful!');
  } catch (err) {
    console.error('Error running migration:', err);
    if (err.response && err.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(err.response.errors, null, 2));
    }
  }
}

run().catch(console.error);
