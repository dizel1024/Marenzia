import { GraphQLClient, gql } from 'graphql-request';
import dotenv from 'dotenv';
dotenv.config();

const client = new GraphQLClient(process.env.HYGRAPH_CONTENT_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

async function run() {
  const mutation = gql`
    mutation UpdateHighlineResidence {
      updateProject(
        where: { slug: "highline-residence" }
        data: {
          quote: "האור מגדיר את האבן, מעניק משקל לריק וקול לצורה המונוליטית."
          architect: "סטודיו סטפן ארקאס"
          location: "צ'לסי, ניו יורק"
          year: "2021"
          overview: {
            children: [
              {
                type: "paragraph"
                children: [
                  {
                    text: "מגורים על קו ההיי-ליין, מגורים אלו משמשים כמקלט של מינרלים ואור. כל משטח נבחר בקפידה כדי להבטיח המשכיות קצבית בין חללי המגורים לסביבות החוץ האינטימיות. התוצאה היא נרטיב אדריכלי חלק של יוקרה ואיפוק."
                  }
                ]
              }
            ]
          }
          gallery: {
            connect: [
              { where: { id: "cmmmtjfpyqzjy07l8hxjba020" } }
              { where: { id: "cmmmtjp49qzud07l8w60li77n" } }
              { where: { id: "cmmmtjtjhr7ds07l0bsgq5l23" } }
            ]
          }
          products: {
            connect: [
              { where: { id: "cmmmtk1fvr08b07l85s7y8b51" } }
              { where: { id: "cmmmtk5t5r7op07l0kr7p5rmi" } }
            ]
          }
        }
      ) {
        id
      }
      publishProject(where: { slug: "highline-residence" }, to: PUBLISHED) {
        id
      }
    }
  `;

  try {
    const data = await client.request(mutation);
    console.log('Update Successful:', data);
  } catch (e) {
    console.error('Update Failed:', JSON.stringify(e, null, 2));
  }
}

run().catch(console.error);
