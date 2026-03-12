import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
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
  const relevantAssets = data.assets.filter(a => 
    a.fileName.includes('img_a4d4fb32a3e9') || 
    a.fileName.includes('img_c4c407d8b8f7') ||
    a.fileName.includes('img_6ffab66ff533')
  );
  console.log('Relevant Assets found:', relevantAssets);
}

run().catch(console.error);
