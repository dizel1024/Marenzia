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
      projects {
        id
        slug
        title
      }
    }
  `;
  const data = await client.request(query);
  console.log('Existing projects:', data.projects);
}

run().catch(console.error);
