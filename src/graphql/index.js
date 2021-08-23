import { gql } from 'apollo-server-express';
import { userResolvers } from './resolvers';
import { userTypes } from './typedefs';

const rootTypes = gql`
  type Query {
    _root: Boolean
  }

  type Mutation {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
  Mutation: {
    _root: () => true,
  },
};

export const typeDefs = [ rootTypes, userTypes ];
export const resolvers = [ rootResolvers, userResolvers ]