require('dotenv').config();
import jwt from 'jsonwebtoken';

const verifyBearerToken = (req) => {
  try {
    const { headers } = req;
    const { authorization } = headers;

    const token = authorization.split(' ')[1];
    const teste = jwt.verify(token, process.env.MY_SECRET_KEY);

    return teste;
  } catch (e) {
    return '';
  }
};

export const context = async ({ req, res }) => {
  const loggedUserId = await verifyBearerToken(req);
  return { req, res, loggedUserId };
};
