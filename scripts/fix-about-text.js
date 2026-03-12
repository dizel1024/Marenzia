import 'dotenv/config';
import { GraphQLClient, gql } from 'graphql-request';

const HYGRAPH_API = process.env.HYGRAPH_CONTENT_API;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

const client = new GraphQLClient(HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_TOKEN}`,
  },
});

async function run() {
  console.log('Fetching existing About Page...');
  const query = gql`
    query {
      aboutPages(first: 1) {
        id
      }
    }
  `;
  const { aboutPages } = await client.request(query);
  
  if (!aboutPages || aboutPages.length === 0) {
    console.error('No about page found!');
    return;
  }
  
  const aboutId = aboutPages[0].id;
  console.log(`Updating About Page ID: ${aboutId}`);
  
  const updateMutation = gql`
    mutation UpdateAbout($id: ID!, $blocks: Json) {
      updateAboutPage(where: { id: $id }, data: {
        editorialBlocks: $blocks
      }) {
        id
      }
    }
  `;
  
  const fullTextBlocks = [
    { 
      label: '01 / מורשת משפחתית', 
      text: 'שורשינו נטועים בלב קרארה, שושלת מַרֶנְזִיָה משתרעת על פני דורות של אומנות באבן. התחלנו כקולקטיב קטן של מחצבות, המוקדש להפקת השיש המשובח ביותר שהגדיר את האדריכלות האיטלקית במשך מאות שנים.' 
    },
    { 
      label: '01 / מורשת משפחתית', 
      text: 'כיום, אנו משתפים פעולה עם אנשי חזון עולמיים כדי להגדיר מחדש את גבולות האבן הטבעית. השותפויות הבינלאומיות שלנו מביאות דיוק אדריכלי עכשווי להיסטוריה גאולוגית גולמית, ויוצרות מונוליטים נצחיים עבור חללי הפנים המודרניים.' 
    }
  ];
  
  await client.request(updateMutation, { id: aboutId, blocks: fullTextBlocks });
  console.log('Publishing...');
  
  const publishMutation = gql`
    mutation Publish($id: ID!) {
      publishAboutPage(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;
  await client.request(publishMutation, { id: aboutId });
  console.log('Successfully restored full About Page text!');
}

run().catch(console.error);
