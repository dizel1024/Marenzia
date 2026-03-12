import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function main() {
    // Instead of querying the management sdk, let's just use graphql request to get the schema via introspection
    import('graphql-request').then(async ({ request, gql }) => {
        const query = gql`
          query IntrospectionQuery {
            __type(name: "Product") {
              name
              fields {
                name
                type {
                  name
                  kind
                }
              }
            }
          }
        `;
        const data = await request(process.env.HYGRAPH_CONTENT_API, query, {}, {
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
        });
        console.log(JSON.stringify(data, null, 2));
    });
}
main();
