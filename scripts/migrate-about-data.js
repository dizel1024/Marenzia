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
  console.log('Fetching existing About Page data...');
  const query = gql`
    query {
      aboutPages(first: 1) {
        id
        heroTitle
        quote
        footerQuote
      }
    }
  `;
  const { aboutPages } = await client.request(query);
  
  if (!aboutPages || aboutPages.length === 0) {
    console.error('No about page found!');
    return;
  }
  
  const aboutId = aboutPages[0].id;
  console.log(`Migrating content for About Page ID: ${aboutId}`);
  
  // Hardcoded values since we want the verified un-truncated text
  const payload = {
    editorialTitle: '01 / מורשת משפחתית',
    editorialText1: 'שורשינו נטועים בלב קרארה, שושלת מַרֶנְזִיָה משתרעת על פני דורות של אומנות באבן. התחלנו כקולקטיב קטן של מחצבות, המוקדש להפקת השיש המשובח ביותר שהגדיר את האדריכלות האיטלקית במשך מאות שנים.',
    editorialText2: 'כיום, אנו משתפים פעולה עם אנשי חזון עולמיים כדי להגדיר מחדש את גבולות האבן הטבעית. השותפויות הבינלאומיות שלנו מביאות דיוק אדריכלי עכשווי להיסטוריה גאולוגית גולמית, ויוצרות מונוליטים נצחיים עבור חללי הפנים המודרניים.',
    philosophyTitle: 'פילוסופיית העיצוב שלנו',
    philosophyText: 'חקרו את המפגש בין צורה להיסטוריה גאולוגית. אנו מאמינים בהתערבות מינימלית כדי לחשוף את הנשמה הטובה באבן.',
    philosophyLinkText: 'צפייה בפילוסופיה',
    monolithTitle: 'סדרת המונוליטים',
    monolithText: 'אלמנטים אדריכליים לחדר הרחצה המגולפים מבלוקים בודדים. גישה מהפכנית ליוקרה בת קיימא באמצעות הנדסה מדויקת.',
    monolithLinkText: 'חקרו את הקולקציה'
  };

  const updateMutation = gql`
    mutation UpdateAboutData($id: ID!, $data: AboutPageUpdateInput!) {
      updateAboutPage(where: { id: $id }, data: $data) {
        id
        editorialTitle
      }
    }
  `;
  
  await client.request(updateMutation, { id: aboutId, data: payload });
  
  console.log('Publishing...');
  const publishMutation = gql`
    mutation Publish($id: ID!) {
      publishAboutPage(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;
  await client.request(publishMutation, { id: aboutId });
  console.log('Successfully published content to the new explicit fields!');
}

run().catch(console.error);
