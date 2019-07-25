import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';

let typeDefs = gql`
  extend type Article {
    active: Boolean
  }
`;
export let client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    cacheRedirects: {
      Query: {
        findOneArticle: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Article', id: args.where.id })
      }
    }
  }),
  resolvers: {
    Article: {
      active: () => {
        return true;
      }
    }
  },
  typeDefs
});
