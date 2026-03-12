import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const common = {
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
};

async function updateRelations() {
  // 1. Product -> Collection (Many-to-One)
  // This one already exists from previous step, but let's be safe
  console.log('Establishing Collection relation...');
  const client1 = new Client(common);
  client1.createRelationalField({
    modelApiId: 'Product',
    apiId: 'productCollection',
    displayName: 'Parent Collection',
    type: 'RELATION',
    isRequired: false,
    reverseField: {
      apiId: 'collectionProducts',
      modelApiId: 'Collection',
      displayName: 'Related Products',
      isList: true,
    },
  });
  try { await client1.run(); console.log('Collection relation ready.'); } catch (e) { console.log('Collection relation field might already exist.'); }

  // 2. Product <-> Stone (Many-to-Many)
  console.log('Establishing Stone relation...');
  const client2 = new Client(common);
  client2.createRelationalField({
    modelApiId: 'Product',
    apiId: 'productMaterials',
    displayName: 'Available Materials',
    type: 'RELATION',
    isList: true,
    isRequired: false,
    reverseField: {
      apiId: 'materialProducts',
      modelApiId: 'Stone',
      displayName: 'Linked Products',
      isList: true,
    },
  });
  try { 
    const res = await client2.run(); 
    console.log('Stone relation ready.', JSON.stringify(res, null, 2)); 
  } catch (e) { 
    console.log('Stone relation field might already exist or failed:', e.message); 
  }
}

updateRelations().catch(console.error);
