import { UserModel } from '../../../database';
import { createJwtToken } from '../utils/createJwtToken';
import { ValidationError } from 'apollo-server-errors';
import { verifyPassword } from '../utils/verifyPassword';

export const loginFn = async (_, { data }, { res }) => {
  const { email, password } = data;

  const response = await UserModel.find({ email: email });
  const user = response[0];

  if (!user) throw new ValidationError('Email not found!');

  const correctPassword = await verifyPassword(password, user.password);

  if (!correctPassword) throw new ValidationError('Incorrect password');

  const token = await createJwtToken(user._id);

  res.cookie('jwtToken', token, {
    secure: true, // Rede segura - Https
    httpOnly: true, // Não deve ser acessado via código
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    path: '/',
    sameSite: 'none', // strict lax none
  });

  return {
    userId: user._id,
    token,
  };
};
