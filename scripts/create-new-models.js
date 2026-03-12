import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function createSchema() {
  console.log('Creating new models...');

  // 1. About Page (Singleton)
  client.createModel({
    apiId: 'AboutPage',
    apiIdPlural: 'AboutPages',
    displayName: 'About Page',
  });

  client.createRelationalField({
    modelApiId: 'AboutPage',
    apiId: 'heroImage',
    displayName: 'Hero Image',
    type: 'ASSET',
    reverseField: { apiId: 'aboutPageHero', modelApiId: 'Asset', displayName: 'About Page (Hero)' },
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'heroTitle',
    displayName: 'Hero Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'editorialBlocks',
    displayName: 'Editorial Blocks',
    type: 'JSON',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'quote',
    displayName: 'Quote',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'splitSections',
    displayName: 'Split Sections',
    type: 'JSON',
  });

  client.createRelationalField({
    modelApiId: 'AboutPage',
    apiId: 'madeInItalyImage',
    displayName: 'Made in Italy Image',
    type: 'ASSET',
    reverseField: { apiId: 'aboutPageItaly', modelApiId: 'Asset', displayName: 'About Page (Italy)' },
  });

  client.createRelationalField({
    modelApiId: 'AboutPage',
    apiId: 'lostStonesImage',
    displayName: 'Lost Stones Image',
    type: 'ASSET',
    reverseField: { apiId: 'aboutPageLostStones', modelApiId: 'Asset', displayName: 'About Page (Lost Stones)' },
  });

  client.createRelationalField({
    modelApiId: 'AboutPage',
    apiId: 'footerBgImage',
    displayName: 'Footer Background Image',
    type: 'ASSET',
    reverseField: { apiId: 'aboutPageFooterBg', modelApiId: 'Asset', displayName: 'About Page (Footer Bg)' },
  });

  client.createSimpleField({
    modelApiId: 'AboutPage',
    apiId: 'footerQuote',
    displayName: 'Footer Quote',
    type: 'STRING',
  });

  // 2. Philosophy Page (Singleton)
  client.createModel({
    apiId: 'PhilosophyPage',
    apiIdPlural: 'PhilosophyPages',
    displayName: 'Philosophy Page',
  });

  client.createRelationalField({
    modelApiId: 'PhilosophyPage',
    apiId: 'heroImage',
    displayName: 'Hero Image',
    type: 'ASSET',
    reverseField: { apiId: 'philPageHero', modelApiId: 'Asset', displayName: 'Philosophy Page (Hero)' },
  });

  client.createSimpleField({
    modelApiId: 'PhilosophyPage',
    apiId: 'heroSubtitle',
    displayName: 'Hero Subtitle',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'PhilosophyPage',
    apiId: 'philosophyTitle',
    displayName: 'Philosophy Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'PhilosophyPage',
    apiId: 'philosophyText',
    displayName: 'Philosophy Text',
    type: 'RICHTEXT',
  });

  client.createSimpleField({
    modelApiId: 'PhilosophyPage',
    apiId: 'heritageItems',
    displayName: 'Heritage Items',
    type: 'JSON',
  });

  client.createSimpleField({
    modelApiId: 'PhilosophyPage',
    apiId: 'atelierTitle',
    displayName: 'Atelier Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'PhilosophyPage',
    apiId: 'atelierText',
    displayName: 'Atelier Text',
    type: 'RICHTEXT',
  });

  client.createRelationalField({
    modelApiId: 'PhilosophyPage',
    apiId: 'atelierMainImage',
    displayName: 'Atelier Main Image',
    type: 'ASSET',
    reverseField: { apiId: 'philPageAtelierMain', modelApiId: 'Asset', displayName: 'Philosophy Page (Atelier Main)' },
  });

  client.createRelationalField({
    modelApiId: 'PhilosophyPage',
    apiId: 'atelierSecondaryImage',
    displayName: 'Atelier Secondary Image',
    type: 'ASSET',
    reverseField: { apiId: 'philPageAtelierSec', modelApiId: 'Asset', displayName: 'Philosophy Page (Atelier Secondary)' },
  });

  client.createSimpleField({
    modelApiId: 'PhilosophyPage',
    apiId: 'values',
    displayName: 'Values',
    type: 'JSON',
  });

  // 3. Process Page (Singleton)
  client.createModel({
    apiId: 'ProcessPage',
    apiIdPlural: 'ProcessPages',
    displayName: 'Process Page',
  });

  client.createRelationalField({
    modelApiId: 'ProcessPage',
    apiId: 'heroImage',
    displayName: 'Hero Image',
    type: 'ASSET',
    reverseField: { apiId: 'procPageHero', modelApiId: 'Asset', displayName: 'Process Page (Hero)' },
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'heroTitle',
    displayName: 'Hero Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'heroSubtitle',
    displayName: 'Hero Subtitle',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'editorialSections',
    displayName: 'Editorial Sections',
    type: 'JSON',
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'features',
    displayName: 'Features',
    type: 'JSON',
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'executionDetails',
    displayName: 'Execution Details',
    type: 'JSON',
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'ctaTitle',
    displayName: 'CTA Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'ProcessPage',
    apiId: 'ctaSubtitle',
    displayName: 'CTA Subtitle',
    type: 'STRING',
  });

  // 4. Collections
  client.createModel({
    apiId: 'Collection',
    apiIdPlural: 'Collections',
    displayName: 'Collection',
  });

  client.createSimpleField({
    modelApiId: 'Collection',
    apiId: 'title',
    displayName: 'Title',
    type: 'STRING',
    isRequired: true,
  });

  client.createSimpleField({
    modelApiId: 'Collection',
    apiId: 'slug',
    displayName: 'Slug',
    type: 'STRING',
    isUnique: true,
    isRequired: true,
  });

  client.createSimpleField({
    modelApiId: 'Collection',
    apiId: 'category',
    displayName: 'Category',
    type: 'STRING',
  });

  client.createRelationalField({
    modelApiId: 'Collection',
    apiId: 'image',
    displayName: 'Image',
    type: 'ASSET',
    reverseField: { apiId: 'collectionsImage', modelApiId: 'Asset', displayName: 'Collections' },
  });

  client.createModel({
    apiId: 'CollectionsPage',
    apiIdPlural: 'CollectionsPages',
    displayName: 'Collections Page',
  });

  client.createSimpleField({
    modelApiId: 'CollectionsPage',
    apiId: 'title',
    displayName: 'Title',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'CollectionsPage',
    apiId: 'introText',
    displayName: 'Intro Text',
    type: 'STRING',
  });

  client.createRelationalField({
    modelApiId: 'CollectionsPage',
    apiId: 'collections',
    displayName: 'CollectionsList',
    type: 'RELATION',
    isList: true,
    reverseField: {
      apiId: 'collectionsPage',
      modelApiId: 'Collection',
      displayName: 'Collections Page',
    },
  });

  console.log('Running migration...');
  try {
    const result = await client.run();
    console.log('Migration Result:', JSON.stringify(result, null, 2));
    console.log('Migration finished successfully!');
  } catch (error) {
    console.error('Migration failed!');
    if (error.response && error.response.errors) {
      console.error('GraphQL Errors:', JSON.stringify(error.response.errors, null, 2));
    } else {
      console.error(error);
    }
  }
}

createSchema().catch(console.error);
