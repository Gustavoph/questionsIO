require('dotenv').config();
import jwt from 'jsonwebtoken';

export const createJwtToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.MY_SECRET_KEY, {
    expiresIn: '7d',
  });
  return token;
};
