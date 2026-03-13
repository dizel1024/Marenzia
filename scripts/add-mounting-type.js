import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function run() {
  console.log('Adding MountingType enum and field to Product...');

  // Step 1: Create the MountingType enumeration
  client.createEnumeration({
    apiId: 'MountingType',
    displayName: 'Mounting Type',
    values: [
      { apiId: 'WALL_MOUNTED', displayName: 'Wall Mounted (תלוי)' },
      { apiId: 'FREESTANDING', displayName: 'Freestanding (עומד)' },
    ],
  });

  // Step 2: Add the mountingType field to Product model
  client.createEnumerableField({
    modelApiId: 'Product',
    apiId: 'mountingType',
    displayName: 'Mounting Type',
    enumerationApiId: 'MountingType',
  });

  try {
    const response = await client.run(true);
    console.log('Migration Result:', JSON.stringify(response, null, 2));
    console.log('MountingType field added successfully!');
  } catch (err) {
    console.error('Error running migration:', err);
    if (err.response && err.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(err.response.errors, null, 2));
    }
  }
}

run().catch(console.error);
