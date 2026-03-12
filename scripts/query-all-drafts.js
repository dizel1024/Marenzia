import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
dotenv.config();

const client = new GraphQLClient(process.env.HYGRAPH_CONTENT_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    'gcms-stage': 'DRAFT'
  },
});

async function run() {
  const query = gql`
    query {
      projects(stage: DRAFT) {
        title
        slug
        mainImage { url, fileName }
      }
    }
  `;
  const data = await client.request(query);
  console.log(JSON.stringify(data.projects.map(p => ({title: p.title, file: p.mainImage?.fileName})), null, 2));
}

run().catch(console.error);
