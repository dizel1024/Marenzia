import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function run() {
  console.log('Adding featuredProjects to CommercialPage model...');

  client.createRelationalField({
    modelApiId: 'CommercialPage',
    apiId: 'featuredProjects',
    displayName: 'Featured Projects',
    type: 'RELATION',
    isList: true,
    reverseField: { apiId: 'commercialPages', modelApiId: 'Project', displayName: 'Commercial Pages', isList: true },
  });

  try {
    const response = await client.run(true);
    console.log('Migration Result:', JSON.stringify(response, null, 2));
    console.log('Featured Projects field addition successful!');
  } catch (err) {
    console.error('Error running migration:', err);
    if (err.response && err.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(err.response.errors, null, 2));
    }
  }
}

run().catch(console.error);
