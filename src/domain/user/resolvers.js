import bcrypt from 'bcrypt';
import { ValidationError } from 'apollo-server-express';

import { getUserFn } from './controllers/getUserFn';
import { getUsersFn } from './controllers/getUsersFn';
import { createUserFn } from './controllers/createUserFn';
import { deleteUserFn } from './controllers/deleteUserFn';
import { updateUserFn } from './controllers/updateUserFn';

export const userResolvers = {
  Query: {
    getUser: getUserFn,
    getUsers: getUsersFn,
  },
  Mutation: {
    createUser: createUserFn,
    deleteUser: deleteUserFn,
    updateUser: updateUserFn,
  },
};
