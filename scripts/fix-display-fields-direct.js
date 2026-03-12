import 'dotenv/config';
import { GraphQLClient, gql } from 'graphql-request';

const HYGRAPH_MANAGEMENT_API = process.env.HYGRAPH_MANAGEMENT_API;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

const client = new GraphQLClient(HYGRAPH_MANAGEMENT_API, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_TOKEN}`,
  },
});

const UPDATE_MODEL_MUTATION = gql`
  mutation UpdateModelDisplayField($apiId: String!, $fieldApiId: String!) {
    updateModel(data: { entryTitleFieldApiId: $fieldApiId }, where: { apiId: $apiId }) {
      apiId
    }
  }
`;

async function fixDisplayFields() {
  const models = [
    { apiId: 'Category', fieldApiId: 'title' },
    { apiId: 'Stone', fieldApiId: 'name' },
    { apiId: 'Product', fieldApiId: 'title' },
    { apiId: 'Collection', fieldApiId: 'title' },
  ];

  for (const model of models) {
    console.log(`Updating ${model.apiId} to use ${model.fieldApiId} as display field...`);
    try {
      await client.request(UPDATE_MODEL_MUTATION, model);
      console.log(`Successfully updated ${model.apiId}.`);
    } catch (error) {
      console.error(`Failed to update ${model.apiId}:`, error.message);
    }
  }
}

fixDisplayFields().catch(console.error);
