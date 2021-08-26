import { loginFn } from './controllers/loginFn';

export const loginResolvers = {
  Mutation: {
    login: loginFn,
  },
};
