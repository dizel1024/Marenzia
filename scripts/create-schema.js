import { Client } from '@hygraph/management-sdk';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  authToken: process.env.HYGRAPH_TOKEN || '',
  endpoint: process.env.HYGRAPH_CONTENT_API || '',
});

async function createSchema() {
  console.log('Creating schema...');

  // 0. Create Enumeration
  client.createEnumeration({
    apiId: 'CategoryType',
    displayName: 'Category Type',
    values: [
      { apiId: 'BATH', displayName: 'Bath' },
      { apiId: 'DECOR', displayName: 'Decor' },
      { apiId: 'STONE', displayName: 'Stone' },
    ],
  });

  // 1. Create Category Model
  client.createModel({
    apiId: 'Category',
    apiIdPlural: 'Categories',
    displayName: 'Category',
  });

  client.createSimpleField({
    modelApiId: 'Category',
    apiId: 'title',
    displayName: 'Title',
    type: 'STRING',
    isRequired: true,
  });

  client.createSimpleField({
    modelApiId: 'Category',
    apiId: 'slug',
    displayName: 'Slug',
    type: 'STRING',
    isUnique: true,
    isRequired: true,
  });

  client.createEnumerableField({
    modelApiId: 'Category',
    apiId: 'type',
    displayName: 'Type',
    enumerationApiId: 'CategoryType',
    isRequired: true,
  });

  // 2. Create Project Model
  client.createModel({
    apiId: 'Project',
    apiIdPlural: 'Projects',
    displayName: 'Project',
  });

  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'title',
    displayName: 'Title',
    type: 'STRING',
    isRequired: true,
  });

  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'slug',
    displayName: 'Slug',
    type: 'STRING',
    isUnique: true,
    isRequired: true,
  });

  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'location',
    displayName: 'Location',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'year',
    displayName: 'Year',
    type: 'STRING',
  });

  client.createRelationalField({
    modelApiId: 'Project',
    apiId: 'mainImage',
    displayName: 'Main Image',
    type: 'ASSET',
    isRequired: true,
    reverseField: {
      apiId: 'projectsMain',
      modelApiId: 'Asset',
      displayName: 'Projects (Main)',
    },
  });

  client.createRelationalField({
    modelApiId: 'Project',
    apiId: 'gallery',
    displayName: 'Gallery',
    type: 'ASSET',
    isList: true,
    reverseField: {
      apiId: 'projectsGallery',
      modelApiId: 'Asset',
      displayName: 'Projects (Gallery)',
    },
  });

  client.createSimpleField({
    modelApiId: 'Project',
    apiId: 'description',
    displayName: 'Description',
    type: 'RICHTEXT',
  });

  // 3. Create Product Model
  client.createModel({
    apiId: 'Product',
    apiIdPlural: 'Products',
    displayName: 'Product',
  });

  client.createSimpleField({
    modelApiId: 'Product',
    apiId: 'title',
    displayName: 'Title',
    type: 'STRING',
    isRequired: true,
  });

  client.createSimpleField({
    modelApiId: 'Product',
    apiId: 'slug',
    displayName: 'Slug',
    type: 'STRING',
    isUnique: true,
    isRequired: true,
  });

  client.createRelationalField({
    modelApiId: 'Product',
    apiId: 'mainImage',
    displayName: 'Main Image',
    type: 'ASSET',
    isRequired: true,
    reverseField: {
      apiId: 'productsMain',
      modelApiId: 'Asset',
      displayName: 'Products (Main)',
    },
  });

  client.createRelationalField({
    modelApiId: 'Product',
    apiId: 'gallery',
    displayName: 'Gallery',
    type: 'ASSET',
    isList: true,
    reverseField: {
      apiId: 'productsGallery',
      modelApiId: 'Asset',
      displayName: 'Products (Gallery)',
    },
  });

  client.createSimpleField({
    modelApiId: 'Product',
    apiId: 'overview',
    displayName: 'סקירה (Overview)',
    type: 'RICHTEXT',
  });

  client.createSimpleField({
    modelApiId: 'Product',
    apiId: 'specifications',
    displayName: 'מפרט (Specifications)',
    type: 'RICHTEXT',
  });

  client.createSimpleField({
    modelApiId: 'Product',
    apiId: 'finishes',
    displayName: 'גימורים (Finishes)',
    type: 'RICHTEXT',
  });

  client.createRelationalField({
    modelApiId: 'Product',
    apiId: 'technicalDownloads',
    displayName: 'הורדות טכניות (Technical Downloads)',
    type: 'ASSET',
    isList: true,
    reverseField: {
      apiId: 'productsDownloads',
      modelApiId: 'Asset',
      displayName: 'Products (Downloads)',
    },
  });

  // 4. Create Stone Model
  client.createModel({
    apiId: 'Stone',
    apiIdPlural: 'Stones',
    displayName: 'Stone',
  });

  client.createSimpleField({
    modelApiId: 'Stone',
    apiId: 'name',
    displayName: 'Name',
    type: 'STRING',
    isRequired: true,
  });

  client.createSimpleField({
    modelApiId: 'Stone',
    apiId: 'type',
    displayName: 'Type',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'Stone',
    apiId: 'tone',
    displayName: 'Tone',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'Stone',
    apiId: 'code',
    displayName: 'Code',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'Stone',
    apiId: 'porosity',
    displayName: 'Porosity',
    type: 'STRING',
  });

  client.createSimpleField({
    modelApiId: 'Stone',
    apiId: 'origin',
    displayName: 'Origin',
    type: 'STRING',
  });

  client.createRelationalField({
    modelApiId: 'Stone',
    apiId: 'image',
    displayName: 'Image',
    type: 'ASSET',
    reverseField: {
      apiId: 'stonesImage',
      modelApiId: 'Asset',
      displayName: 'Stones',
    },
  });

  client.createSimpleField({
    modelApiId: 'Stone',
    apiId: 'toneDetails',
    displayName: 'Tone Details',
    type: 'STRING',
  });

  // 5. About Page (Singleton)
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

  // 6. Philosophy Page (Singleton)
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

  // 7. Process Page (Singleton)
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

  // 8. Collections
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

  await client.run();
  console.log('Schema created successfully!');
}

createSchema().catch(console.error);
