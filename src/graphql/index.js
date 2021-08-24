import { gql } from "apollo-server-express";
import { userResolvers } from "./resolvers";
import { userTypes } from "./typedefs";
import { withFilter } from "graphql-subscriptions";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();
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
      subscribe: withFilter(() => {
        pubsub.asyncIterator(["USER_CREATED"]);
        return {
          userName: "Gustavo",
          email: "gusta@gmai.com",
          password: "123456",
        },
      }),
    },
  },
};

export const typeDefs = [rootTypes, userTypes];
export const resolvers = [rootResolvers, userResolvers];
