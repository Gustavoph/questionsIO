import { ValidationError } from 'apollo-server-express';

export const verifyEmailExists = async (Model, email) => {
  const user = await Model.findOne({ email: email });

  if (user && user.email) throw new ValidationError('Email already registered');

  return true;
};
