import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function removeDuplicates() {
  console.log('Removing duplicate relations from Product schema...');

  // Delete 'collection' (old field for Parent Collection)
  try {
    client.deleteField({
      modelApiId: 'Product',
      apiId: 'collection',
    });
    console.log('Marked collection field for deletion');
  } catch (e) {
    console.log('collection field might already be deleted or not found');
  }

  // Delete 'availableStones' (old field for Available Materials)
  try {
    client.deleteField({
      modelApiId: 'Product',
      apiId: 'availableStones',
    });
    console.log('Marked availableStones field for deletion');
  } catch (e) {
    console.log('availableStones field might already be deleted or not found');
  }

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

removeDuplicates().catch(console.error);
