import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const client = new GraphQLClient(process.env.HYGRAPH_CONTENT_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

async function run() {
  const query = gql`
    query {
      assets(first: 100) {
        id
        url
        fileName
      }
    }
  `;
  const data = await client.request(query);
  console.log('Total assets:', data.assets.length);
  // print out names of available assets
  console.log('Assets:', data.assets.map(a => a.fileName).slice(0, 50));
}

run().catch(console.error);
