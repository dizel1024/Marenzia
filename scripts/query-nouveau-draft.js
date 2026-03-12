import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
dotenv.config();

const client = new GraphQLClient(process.env.HYGRAPH_CONTENT_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    'gcms-stage': 'DRAFT' // Query the draft stage
  },
});

async function run() {
  const query = gql`
    query {
      project(where: { slug: "nouveau-penthouse" }, stage: DRAFT) {
        title
        mainImage { url, fileName }
        gallery { url, fileName }
      }
    }
  `;
  const data = await client.request(query);
  console.log(JSON.stringify(data, null, 2));
}

run().catch(console.error);
