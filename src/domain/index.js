import { gql } from 'apollo-server-express';
import { userResolvers } from './user/resolvers';
import { userTypes } from './user/typeDefs';

const rootTypes = gql`
  type Query {
    _root: Boolean
  }

  type Mutation {
    _root: Boolean
  }

  type Subscription {
    createdUser: User!
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
  Mutation: {
    _root: () => true,
  },
  Subscription: {
    createdUser: {
      subscribe: (_, __, pubsub) => pubsub.asyncIterator(['USER_CREATED']),
    },
  },
};

export const typeDefs = [rootTypes, userTypes];
export const resolvers = [rootResolvers, userResolvers];
