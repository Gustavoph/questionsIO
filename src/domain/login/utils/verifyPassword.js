import bcrypt from 'bcrypt';

export const verifyPassword = async (password, passwordHash) => {
  const verify = await bcrypt.compare(password, passwordHash);
  return verify;
};
