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
      project(where: { slug: "nouveau-penthouse" }) {
        title
        mainImage { url }
        gallery { url }
      }
    }
  `;
  const data = await client.request(query);
  console.log(JSON.stringify(data, null, 2));
}

run().catch(console.error);
