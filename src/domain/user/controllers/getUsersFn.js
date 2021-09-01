import { UserModel } from '../../../database';

export const getUsersFn = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (err) {
    return new Error('Server Error');
  }
};
