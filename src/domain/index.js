import { gql } from 'apollo-server-express';
import { loginResolvers } from './login/resolvers';
import { loginTypes } from './login/typeDefs';
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

export const typeDefs = [rootTypes, userTypes, loginTypes];
export const resolvers = [rootResolvers, userResolvers, loginResolvers];
