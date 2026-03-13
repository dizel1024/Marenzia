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
  console.log('Fetching assets to use for the Commercial page...');
  
  // Try finding some premium interior shots for commercial vibe
  const assetQuery = gql`
    query {
      assets(where: { fileName_in: ["img_38ac2d605600.webp", "13.jpg", "6.jpg"] }, first: 3) {
        id
        fileName
      }
    }
  `;
  const { assets } = await client.request(assetQuery);
  const heroImageId = assets.find(a => a.fileName === '13.jpg')?.id || assets[0]?.id;

  console.log('Populating Commercial Page content...');
  
  const payload = {
    heroTitle: 'חשבון מסחרי',
    heroSubtitle: 'פתרונות אדריכליים זעירי פרטים לפרויקטים מובילים',
    introTitle: 'שותפים לחזון שלכם',
    introText: 'אנו במרנזיה מבינים שפרויקטים מסחריים דורשים יותר מסתם חומר – הם דורשים שותפות, דיוק מוחלט, ויכולת ביצוע בקנה מידה רחב מבלי להתפשר על האיכות. אנו מציעים פתרונות תפורים אישית (Bespoke) המותאמים בצורה מושלמת לדרישות האדריכל, היזם, ולוחות הזמנים של הפרויקט.',
    service1Title: 'מלונות ומגורי יוקרה',
    service1Text: 'אנו מספקים מעטפת מלאה למלונאות עילית. מלובי כניסה בחיתוכי שיש מרהיבים התואמים בצורת Bookmatch, דרך חיפויי קירות ועד לפתרונות ריהוט שמותאמים אישית לכל סוויטה. היכולות הלוגיסטיות שלנו מבטיחות אספקה אחידה ומושלמת גם בפרויקטים של מאות חדרים.',
    service2Title: 'מסעדות ומרחבי אירוח',
    service2Text: 'האבן הטבעית מעניקה אופי ויוקרה לכל חלל אירוח. אנו מתמחים ביצירת דלפקי בר מונוליתיים, שולחנות סעודה בעיבודים ייחודיים (Leather, Honed), וחיפויים עמידים שנועדו להישאר יפהפיים גם בסביבה דינמית ותובענית.',
    service3Title: 'משרדים וקמעונאות',
    service3Text: 'סביבת העבודה וחללי המכירה המודרניים דורשים שילוב של אלגנטיות נצחית וחדשנות. אנו עובדים יחד עם האדריכלים כדי לשלב אלמנטים מאבן שמשדרים עוצמה וביטחון, מעמדות קבלה מרשימות ועד חיפויי קיר דקורטיביים שמגדירים את זהות המותג.',
    formTitle: 'התחילו פרויקט איתנו',
    formSubtitle: 'השאירו פרטים ונציג המחלקה המסחרית יחזור אליכם בהקדם לתשאל את פרטי הפרויקט.',
  };

  const createMutation = gql`
    mutation CreateCommercialPage($data: CommercialPageCreateInput!) {
      createCommercialPage(data: $data) { id }
    }
  `;

  // Provide exactly matching field names
  const createData = {
    heroTitle: payload.heroTitle,
    heroSubtitle: payload.heroSubtitle,
    introTitle: payload.introTitle,
    introText: payload.introText,
    service1Title: payload.service1Title,
    service1Text: payload.service1Text,
    service2Title: payload.service2Title,
    service2Text: payload.service2Text,
    service3Title: payload.service3Title,
    service3Text: payload.service3Text,
    formTitle: payload.formTitle,
    formSubtitle: payload.formSubtitle,
    ...(heroImageId && { heroImage: { connect: { id: heroImageId } } }),
  };

  try {
    const res = await client.request(createMutation, { data: createData });
    const newId = res.createCommercialPage.id;
    console.log(`Created Commercial Page with ID: ${newId}`);
    
    console.log('Publishing Commercial Page...');
    await client.request(gql`mutation { publishCommercialPage(where: { id: "${newId}" }, to: PUBLISHED) { id } }`);
    console.log('Commercial Page published successfully!');
  } catch (error) {
    console.error('Error migrating content:', JSON.stringify(error, null, 2));
  }
}

run().catch(console.error);
