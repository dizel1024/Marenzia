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
  console.log('Fetching existing Philosophy and Process Pages...');
  
  const philQuery = gql`query { philosophyPages(first: 1) { id } }`;
  const procQuery = gql`query { processPages(first: 1) { id } }`;
  
  const [philRes, procRes] = await Promise.all([
    client.request(philQuery),
    client.request(procQuery)
  ]);
  
  if (!philRes.philosophyPages.length || !procRes.processPages.length) {
    console.error('Pages not found!');
    return;
  }
  
  const philId = philRes.philosophyPages[0].id;
  const procId = procRes.processPages[0].id;
  
  console.log(`Migrating Philosophy Page ID: ${philId}`);
  const philPayload = {
    philosophyText: { children: [{ type: "paragraph", children: [{ text: 'בעידן של רעש, אנו מוצאים כוח במה שלא נאמר. מַרֶנְזִיָה אינה עוסקת רק במשטחים; היא האוצרות של השקט. אנו הופכים אבן גולמית לשירה אדריכלית, מכבדים את המסע של מיליון שנה מהאדמה אל המקדש שלך.' }] }] },
    heritageTitle1: 'החציבה הראשונה', heritageYear1: '1924',
    heritageTitle2: 'סדנת המאסטר', heritageYear2: '1948',
    heritageTitle3: 'אופקים גלובליים', heritageYear3: '1965',
    heritageTitle4: 'החומר הטהור', heritageYear4: '1982',
    atelierText: { children: [{ type: "paragraph", children: [{ text: 'כל לוח שנכנס לאטלייה שלנו מטופל כישות חיה. אמני המאסטר שלנו מקשיבים לגידים ולסדקים, ומבטיחים שהנשמה הטבעית של האבן לעולם לא תאבד לייצור מודרני.' }] }] },
    valuesTitle1: 'אומנות', valuesDesc1: 'ידע דורי פוגש דיוק עכשווי. אנחנו לא רק חותכים; אנחנו מלחינים.',
    valuesTitle2: 'דיוק', valuesDesc2: 'סובלנות הנמדדת במיקרונים. שלמות היא הסטנדרט היחיד שאנו מכירים.',
    valuesTitle3: 'שתיקה', valuesDesc3: 'האסתטיקה של החיסור. אנו מסירים את המיותר כדי לחשוף את המהותי.',
    valuesTitle4: 'אור', valuesDesc4: 'אבן היא כלום ללא משחקי האור. הגימורים שלנו נועדו לרקוד איתו.',
  };

  const updatePhilMutation = gql`
    mutation UpdatePhil($id: ID!, $data: PhilosophyPageUpdateInput!) {
      updatePhilosophyPage(where: { id: $id }, data: $data) { id }
    }
  `;
  await client.request(updatePhilMutation, { id: philId, data: philPayload });
  await client.request(gql`mutation { publishPhilosophyPage(where: { id: "${philId}" }, to: PUBLISHED) { id } }`);


  console.log(`Migrating Process Page ID: ${procId}`);
  const procPayload = {
    sectionLabel1: '01 / חומריות', sectionTitle1: 'נוצר באופן בלעדי למענכם', sectionText1: 'אין שתי פיסות אבן זהות. אנו מזמינים לקוחות לקריירות הבלעדיות שלנו בטוסקנה לבחור אישית את הבלוק שיהפוך לפרויקט שלהם.',
    sectionLabel2: '02 / ייעוץ', sectionTitle2: 'ייעוץ עיצובי ללא עלות', sectionText2: 'אנו מסייעים בתהליך הקפדני של בחירת האבן הנכונה עבור יישומים ספציפיים, מאזנים בין משיכה אסתטית לדרישות טכניות כמו נקבוביות וחוזק לחיצה.',
    sectionLabel3: '03 / סינרגיה', sectionTitle3: 'שירות הסיוע העיצובי שלנו', sectionText3: 'בעבודה צמודה עם הצוות הקריאטיבי של הלקוח, אנו מפתחים פתרונות מותאמים אישית שפורצים את גבולות אומנות האבן. מסקיצה ראשונית ועד הדמיית תלת-ממד, המחלקה הטכנית שלנו מבטיחה שכל פרט ייפתר.',
    feature1: 'אינטגרציית CAD', feature2: 'בדיקות מאמץ חומרים', feature3: 'פרטי נגרות מותאמים אישית',
    sectionLabel4: '04 / ביצוע', sectionTitle4: 'סיוע באתר הבנייה', sectionText4: 'עשורים של ניסיון בשטח לימדו אותנו ש-5% האחרונים של הביצוע מגדירים את הפרויקט כולו. אנו מספקים תמיכה לוגיסטית מקצה לקצה ופיקוח מומחה במהלך ההתקנה כדי להבטיח ששלמות המינרלים נשמרת.',
    executionLogisticTitle: 'לוגיסטיקה גלובלית', executionLogisticText: 'משלוח "כפפות לבנות" מדלת לדלת של לוחות רגישים ברחבי העולם.',
    executionAdvisoryTitle: 'ליווי טכני', executionAdvisoryText: 'מנהלי אתרים ייעודיים נוכחים בשלבי התקנה קריטיים.'
  };

  const updateProcMutation = gql`
    mutation UpdateProc($id: ID!, $data: ProcessPageUpdateInput!) {
      updateProcessPage(where: { id: $id }, data: $data) { id }
    }
  `;
  await client.request(updateProcMutation, { id: procId, data: procPayload });
  console.log('Sleeping briefly to avoid rate limits...');
  await new Promise(r => setTimeout(r, 2000));
  await client.request(gql`mutation { publishProcessPage(where: { id: "${procId}" }, to: PUBLISHED) { id } }`);

  console.log('Successfully published content for both pages!');
}

run().catch(console.error);
