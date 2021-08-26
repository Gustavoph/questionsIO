import jwt from 'jsonwebtoken';

const MY_SECRET_KEY = 'JONSONSBABY';

export const createJwtToken = (userId) => {
  const token = jwt.sign({ userId }, MY_SECRET_KEY, {
    expiresIn: '7d',
  });
  return token;
};
