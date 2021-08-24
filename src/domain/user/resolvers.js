import bcrypt from 'bcrypt';
import { ValidationError } from 'apollo-server-express';
import { createUserFn } from './controllers/createUserFn';
import { getUsersFn } from './controllers/getUserFn';

const verifyPassword = (password, loginPassword) => {};

export const userResolvers = {
  Query: {
    getUsers: getUsersFn,
  },
  Mutation: {
    createUser: createUserFn,
  },
};
