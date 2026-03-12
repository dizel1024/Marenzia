import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function updateSchema() {
  console.log('Updating Project schema...');
  // 1. Add 'quote' field (STRING)
  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'quote',
    displayName: 'Quote',
    type: 'STRING',
  });

  // 2. Add 'overview' field (RICHTEXT)
  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'overview',
    displayName: 'Overview',
    type: 'RICHTEXT',
  });

  // 3. Add 'architect' field (STRING)
  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'architect',
    displayName: 'Architect',
    type: 'STRING',
  });

  // Run the migration
  console.log('Running migration...');
  try {
    const result = await client.run();
    console.log('Migration Result:', JSON.stringify(result, null, 2));
    console.log('Migration finished successfully!');
  } catch (error) {
    console.error('Migration failed!');
    if (error.response && error.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(error.response.errors, null, 2));
    } else {
      console.error(error);
    }
  }
}

updateSchema().catch(console.error);
