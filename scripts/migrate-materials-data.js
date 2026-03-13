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
  console.log('Fetching assets to use for the Materials page...');
  
  const assetQuery = gql`
    query {
      assets(where: { fileName_in: ["img_38ac2d605600.webp", "stone_verde_alpi.jpg", "process_advisory_v2.png"] }, first: 3) {
        id
        fileName
      }
    }
  `;
  const { assets } = await client.request(assetQuery);
  const heroImageId = assets.find(a => a.fileName === 'img_38ac2d605600.webp')?.id || assets[0]?.id;
  const storyImage1Id = assets.find(a => a.fileName === 'stone_verde_alpi.jpg')?.id || assets[1]?.id || heroImageId;
  const storyImage2Id = assets.find(a => a.fileName === 'process_advisory_v2.png')?.id || assets[2]?.id || heroImageId;

  console.log('Populating Materials Page content...');
  
  const payload = {
    heroTitle: 'חומריות',
    heroSubtitle: 'מסע חובק עולם בעקבות האבן המושלמת',
    storyTitle1: 'החיפוש אחר הנדיר',
    storyText1: 'אנו במרנזיה מאמינים שהפרויקט המושלם מתחיל בחומר המושלם. המומחים שלנו נוסעים לקצוות תבל, מהמחצבות ההיסטוריות של קרארה באיטליה ועד להרי הטאורוס בטורקיה, כדי לאתר ולבחור בקפידה את גושי האבן, השיש, והאוניקס יוצאי הדופן ביותר.',
    storyTitle2: 'בקרת איכות בלתי מתפשרת',
    storyText2: 'כל לוח אבן נבחן תחת סטנדרטים מחמירים של עמידות, טקסטורה, ומשחקי אור. אנו מוודאים שרק החומרים שעומדים בדרישות הקפדניות ביותר של אדריכלות העילית הבינלאומית יגיעו לאטלייה שלנו.',
    sourcingTitle: 'מקורות נבחרים בעולם',
    sourcingText: 'טוסקנה, איטליה (שיש קרארה, קלקטה, סטטואריו) | פיאדמונט (ורדה אלפי) | ספרד (נרו מרקינה) | טורקיה ויוון (אבן גיר וטרוורטין מובחרים)',
  };

  const createMutation = gql`
    mutation CreateMaterialsPage($data: MaterialsPageCreateInput!) {
      createMaterialsPage(data: $data) { id }
    }
  `;

  // We connect the assets within the variables object structure exactly matching the schema.
  const createData = {
    heroTitle: payload.heroTitle,
    heroSubtitle: payload.heroSubtitle,
    storyTitle1: payload.storyTitle1,
    storyText1: payload.storyText1,
    storyTitle2: payload.storyTitle2,
    storyText2: payload.storyText2,
    sourcingTitle: payload.sourcingTitle,
    sourcingText: payload.sourcingText,
    ...(heroImageId && { heroImage: { connect: { id: heroImageId } } }),
    ...(storyImage1Id && { storyImage1: { connect: { id: storyImage1Id } } }),
    ...(storyImage2Id && { storyImage2: { connect: { id: storyImage2Id } } }),
  };

  try {
    const res = await client.request(createMutation, { data: createData });
    const newId = res.createMaterialsPage.id;
    console.log(`Created Materials Page with ID: ${newId}`);
    
    // Publish immediately
    console.log('Publishing Materials Page...');
    await client.request(gql`mutation { publishMaterialsPage(where: { id: "${newId}" }, to: PUBLISHED) { id } }`);
    console.log('Materials Page published successfully!');
  } catch (error) {
    console.error('Error migrating content:', JSON.stringify(error, null, 2));
  }
}

run().catch(console.error);
