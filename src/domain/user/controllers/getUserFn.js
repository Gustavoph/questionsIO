import { UserModel } from '../../../database';

export const getUsersFn = async () => {
  const users = await UserModel.find();
  return users;
};
