import { request, gql } from 'graphql-request';
import dotenv from 'dotenv';
dotenv.config();

const query = gql`
  query {
    products(where: { category: { slug_in: ["basins", "vanity"] } }, first: 50) {
      id
      title
      slug
      mountingType
      category {
        slug
        title
      }
    }
  }
`;

const data = await request(process.env.HYGRAPH_CONTENT_API, query, {}, {
  Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
});

console.log('Products under basins/vanity:');
data.products.forEach(p => {
  console.log(`  [${p.category.slug}] ${p.title} — mountingType: ${p.mountingType || 'NOT SET'}`);
});
