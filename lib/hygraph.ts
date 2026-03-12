import { GraphQLClient } from 'graphql-request';

const contentApi = process.env.HYGRAPH_CONTENT_API || 'https://api-eu-west-2.hygraph.com/v2/cmmjbw97104i108lcgwhdessh/master';
const managementApi = process.env.HYGRAPH_MANAGEMENT_API || 'https://api-eu-west-2.hygraph.com/v2/cmmjbw97104i108lcgwhdessh/master';
const token = process.env.HYGRAPH_TOKEN || '';

export const hygraph = new GraphQLClient(contentApi, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Management Client for schema modifications
export const hygraphAdmin = new GraphQLClient(managementApi, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
