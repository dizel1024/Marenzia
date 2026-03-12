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
    query IntrospectionQuery {
      __type(name: "ProjectUpdateInput") {
        name
        fields {
          name
        }
      }
    }
  `;
  const data = await client.request(query);
  console.log('ProjectUpdateInput fields:', data.__type.fields.map(f => f.name));
}

run().catch(console.error);
