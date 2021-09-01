import { gql } from 'apollo-server-express';

export const userTypes = gql`
  type User {
    _id: ID!
    userName: String!
    email: String!
  }

  input InputCreateUser {
    userName: String!
    email: String!
    password: String!
  }

  extend type Query {
    getUser(id: ID!): User!
    getUsers: [User!]!
  }

  extend type Mutation {
    createUser(data: InputCreateUser): User!
    deleteUser(id: ID): User!
  }
`;
