import bcrypt from 'bcrypt';

export const generatePasswordHash = async (password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};
