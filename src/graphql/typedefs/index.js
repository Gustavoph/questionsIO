import { gql } from "apollo-server-express";

export const userTypes = gql`
  type User {
    userName: String!
    email: String!
    password: String!
  }

  extend type Query {
    getUser: User!
  }

  extend type Mutation {
    createUser: User!
  }
`;
