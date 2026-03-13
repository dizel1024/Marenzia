import { gql } from 'graphql-request';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($categorySlug: String!) {
    products(where: { category: { slug: $categorySlug } }) {
      id
      title
      slug
      mainImage {
        url
      }
      category {
        title
        slug
      }
    }
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($slug: String!) {
    product(where: { slug: $slug }) {
      id
      title
      slug
      overview {
        html
      }
      specifications {
        html
      }
      finishes {
        html
      }
      mainImage {
        url
      }
      gallery {
        url
      }
      technicalDownloads {
        url
        fileName
      }
      productCollection {
        id
        title
        slug
        collectionProducts(first: 3, where: { slug_not: $slug }) {
          id
          title
          slug
          mainImage {
            url
          }
        }
      }
      productMaterials {
        id
        name
        image {
          url
        }
      }
      relatedProjects {
        id
        title
        slug
        location
        mainImage {
          url
        }
      }
    }
  }
`;

export const GET_COLLECTIONS = gql`
  query GetCollections {
    collections {
      id
      title
      slug
      category
      image {
        url
      }
    }
  }
`;

export const GET_COLLECTION_DETAILS = gql`
  query GetCollectionDetails($slug: String!) {
    collection(where: { slug: $slug }) {
      id
      title
      slug
      image {
        url
      }
      collectionProducts {
        id
        title
        slug
        mainImage {
          url
        }
      }
    }
  }
`;
export const GET_PRODUCTS_BY_TYPE = gql`
  query GetProductsByType($type: CategoryType!) {
    products(where: { category: { type: $type } }) {
      id
      title
      slug
      mainImage {
        url
      }
      category {
        slug
      }
      productCollection {
        title
        slug
      }
      productMaterials {
        name
      }
    }
  }
`;

export const GET_ABOUT_PAGE_DATA = gql`
  query GetAboutPageData {
    aboutPages(first: 1) {
      heroImage { url }
      heroTitle
      editorialTitle
      editorialText1
      editorialText2
      philosophyTitle
      philosophyText
      philosophyImage { url }
      philosophyLinkText
      monolithTitle
      monolithText
      monolithImage { url }
      monolithLinkText
      quote
      madeInItalyImage { url }
      madeInItalyTitle
      madeInItalySubtitle
      lostStonesImage { url }
      lostStonesTitle
      lostStonesSubtitle
      footerBgImage { url }
      footerQuote
    }
  }
`;

export const GET_PHILOSOPHY_PAGE_DATA = gql`
  query GetPhilosophyPageData {
    philosophyPages(first: 1) {
      heroImage { url }
      heroSubtitle
      philosophyTitle
      philosophyText { html }
      heritageYear1
      heritageTitle1
      heritageImage1 { url }
      heritageYear2
      heritageTitle2
      heritageImage2 { url }
      heritageYear3
      heritageTitle3
      heritageImage3 { url }
      heritageYear4
      heritageTitle4
      heritageImage4 { url }
      atelierTitle
      atelierText { html }
      atelierMainImage { url }
      atelierSecondaryImage { url }
      valuesTitle1
      valuesDesc1
      valuesTitle2
      valuesDesc2
      valuesTitle3
      valuesDesc3
      valuesTitle4
      valuesDesc4
    }
  }
`;

export const GET_PROCESS_PAGE_DATA = gql`
  query GetProcessPageData {
    processPages(first: 1) {
      heroImage { url }
      heroTitle
      heroSubtitle
      sectionLabel1
      sectionTitle1
      sectionText1
      sectionImage1 { url }
      sectionLabel2
      sectionTitle2
      sectionText2
      sectionImage2 { url }
      sectionLabel3
      sectionTitle3
      sectionText3
      sectionImage3 { url }
      sectionLabel4
      sectionTitle4
      sectionText4
      sectionImage4 { url }
      feature1
      feature2
      feature3
      executionLogisticTitle
      executionLogisticText
      executionAdvisoryTitle
      executionAdvisoryText
      ctaTitle
      ctaSubtitle
    }
  }
`;

export const GET_MATERIALS_PAGE_DATA = gql`
  query GetMaterialsPageData {
    materialsPages(first: 1) {
      heroImage { url }
      heroTitle
      heroSubtitle
      storyTitle1
      storyText1
      storyImage1 { url }
      storyTitle2
      storyText2
      storyImage2 { url }
      sourcingTitle
      sourcingText
    }
  }
`;

export const GET_COMMERCIAL_PAGE_DATA = gql`
  query GetCommercialPageData {
    commercialPages(first: 1) {
      heroImage { url }
      heroTitle
      heroSubtitle
      introTitle
      introText
      service1Title
      service1Text
      service2Title
      service2Text
      service3Title
      service3Text
      formTitle
      formSubtitle
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      slug
      location
      year
      mainImage {
        url
      }
    }
  }
`;

export const GET_PROJECT_DETAILS = gql`
  query GetProjectDetails($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      slug
      location
      year
      quote
      architect
      overview {
        html
      }
      mainImage {
        url
      }
      gallery {
        url
      }
      products {
        id
        title
        slug
        mainImage {
          url
        }
      }
    }
  }
`;
