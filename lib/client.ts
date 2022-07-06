import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT as string, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export default client;
