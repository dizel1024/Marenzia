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
      }
    }
  }
`;

export const GET_ABOUT_PAGE_DATA = gql`
  query GetAboutPageData {
    aboutPages(first: 1) {
      heroImage { url }
      heroTitle
      editorialBlocks
      quote
      splitSections
      madeInItalyImage { url }
      lostStonesImage { url }
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
      heritageItems
      atelierTitle
      atelierText { html }
      atelierMainImage { url }
      atelierSecondaryImage { url }
      values
    }
  }
`;

export const GET_PROCESS_PAGE_DATA = gql`
  query GetProcessPageData {
    processPages(first: 1) {
      heroImage { url }
      heroTitle
      heroSubtitle
      editorialSections
      features
      executionDetails
      ctaTitle
      ctaSubtitle
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
