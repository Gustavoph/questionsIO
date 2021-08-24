import { ValidationError } from 'apollo-server-express';

export const verifyInput = (data) => {
  const { userName, email, password } = data;
  const lenghPassword = password.length;

  if (!userName) throw new ValidationError('UserName is required');

  if (!email) throw new ValidationError('Email is required');

  if (!password) throw new ValidationError('Password is required');

  if (lenghPassword < 8)
    throw new ValidationError('password must be 8 characters');

  return true;
};
