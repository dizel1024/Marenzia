import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const common = {
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
};

async function fixDisplayFields() {
  const client = new Client({
    authToken: common.authToken,
    endpoint: common.endpoint,
  });

  console.log('Fixing display fields by setting isTitle: true...');

  client.updateSimpleField({
    modelApiId: 'Project',
    apiId: 'title',
    isTitle: true,
  });

  try {
    const result = await client.run();
    console.log('Display fields (isTitle: true) applied successfully!');
  } catch (error) {
    console.error('Error updating fields:', error.message);
    if (error.response && error.response.errors) {
       console.error('Errors:', JSON.stringify(error.response.errors, null, 2));
    }
  }
}

fixDisplayFields().catch(console.error);
