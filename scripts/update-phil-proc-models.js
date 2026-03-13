import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function run() {
  console.log('Adding explicit fields to PhilosophyPage and ProcessPage models...');

  // --- PHILOSOPHY PAGE ---
  
  // Heritage Items (Array of 4)
  for (let i = 1; i <= 4; i++) {
    client.createSimpleField({
      modelApiId: 'PhilosophyPage',
      apiId: `heritageYear${i}`,
      displayName: `Heritage Year ${i}`,
      type: 'STRING',
    });
    client.createSimpleField({
      modelApiId: 'PhilosophyPage',
      apiId: `heritageTitle${i}`,
      displayName: `Heritage Title ${i}`,
      type: 'STRING',
    });
    client.createRelationalField({
      modelApiId: 'PhilosophyPage',
      apiId: `heritageImage${i}`,
      displayName: `Heritage Image ${i}`,
      type: 'ASSET',
      reverseField: { apiId: `philPageHeritageImage${i}`, modelApiId: 'Asset', displayName: `Philosophy Page (Heritage ${i})` },
    });
  }

  // Values Items (Array of 4)
  for (let i = 1; i <= 4; i++) {
    client.createSimpleField({
      modelApiId: 'PhilosophyPage',
      apiId: `valuesTitle${i}`,
      displayName: `Values Title ${i}`,
      type: 'STRING',
    });
    client.createSimpleField({
      modelApiId: 'PhilosophyPage',
      apiId: `valuesDesc${i}`,
      displayName: `Values Desc ${i}`,
      type: 'STRING',
      formConfig: { renderer: 'MULTI_LINE' }
    });
  }

  // --- PROCESS PAGE ---
  
  // Editorial Sections (Array of 4)
  for (let i = 1; i <= 4; i++) {
    client.createSimpleField({
      modelApiId: 'ProcessPage',
      apiId: `sectionLabel${i}`,
      displayName: `Section Label ${i}`,
      type: 'STRING',
    });
    client.createSimpleField({
      modelApiId: 'ProcessPage',
      apiId: `sectionTitle${i}`,
      displayName: `Section Title ${i}`,
      type: 'STRING',
    });
    client.createSimpleField({
      modelApiId: 'ProcessPage',
      apiId: `sectionText${i}`,
      displayName: `Section Text ${i}`,
      type: 'STRING',
      formConfig: { renderer: 'MULTI_LINE' }
    });
    client.createRelationalField({
      modelApiId: 'ProcessPage',
      apiId: `sectionImage${i}`,
      displayName: `Section Image ${i}`,
      type: 'ASSET',
      reverseField: { apiId: `procPageSectionImage${i}`, modelApiId: 'Asset', displayName: `Process Page (Section ${i})` },
    });
  }

  // Features (Array of 3 strings)
  for (let i = 1; i <= 3; i++) {
    client.createSimpleField({
      modelApiId: 'ProcessPage',
      apiId: `feature${i}`,
      displayName: `Feature ${i}`,
      type: 'STRING',
    });
  }

  // Execution Details (2 items)
  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'executionLogisticTitle',
    displayName: 'Execution Logistic Title',
    type: 'STRING',
  });
  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'executionLogisticText',
    displayName: 'Execution Logistic Text',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'executionAdvisoryTitle',
    displayName: 'Execution Advisory Title',
    type: 'STRING',
  });
  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'executionAdvisoryText',
    displayName: 'Execution Advisory Text',
    type: 'STRING',
    formConfig: { renderer: 'MULTI_LINE' }
  });

  try {
    const response = await client.run(true);
    console.log('Migration Result:', JSON.stringify(response, null, 2));
    console.log('Migration successful!');
  } catch (err) {
    console.error('Error running migration:', err);
    if (err.response && err.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(err.response.errors, null, 2));
    }
  }
}

run().catch(console.error);
