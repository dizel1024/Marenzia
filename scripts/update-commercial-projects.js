import dotenv from 'dotenv';
import { request, gql } from 'graphql-request';
dotenv.config();

const API_ENDPOINT = process.env.HYGRAPH_MANAGEMENT_API;
const TOKEN = process.env.HYGRAPH_TOKEN;

async function run() {
  if (!API_ENDPOINT || !TOKEN) {
    console.error("Missing HYGRAPH_MANAGEMENT_API or HYGRAPH_TOKEN");
    return;
  }

  const query = gql`
    mutation {
      createRelationalField(
        data: {
          apiId: "featuredProjects",
          displayName: "Featured Projects",
          type: RELATION,
          isList: true,
          reverseSide: {
            apiId: "commercialPages",
            displayName: "Commercial Pages",
            isList: true
          },
          model: { connect: { apiId: "CommercialPage" } },
          relatedModel: { connect: { apiId: "Project" } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const res = await request(
      API_ENDPOINT,
      query,
      {},
      { Authorization: `Bearer ${TOKEN}` }
    );
    console.log("Field created:", res);
  } catch (error) {
    if (error.response && error.response.errors) {
      console.log("Already exists or error:", error.response.errors[0].message);
    } else {
      console.error(error);
    }
  }
}

run();
