import { gql } from 'apollo-server-express';

export const loginTypes = gql`
  type Login {
    userId: String!
    token: String!
  }

  input InputLogin {
    email: String!
    password: String!
  }

  extend type Mutation {
    login(data: InputLogin): Login!
  }
`;
