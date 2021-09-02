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

  input InputUpdateUser {
    userName: String!
    email: String!
  }

  extend type Mutation {
    createUser(data: InputCreateUser): User!
    deleteUser(id: ID): Boolean!
    updateUser(userId: ID!, data: InputUpdateUser): User!
  }
`;
