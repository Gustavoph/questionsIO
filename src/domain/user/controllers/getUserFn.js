import { ValidationError } from 'apollo-server-express';
import { UserModel } from '../../../database';

export const getUserFn = async (_, { id }, { loggedUserId }) => {
  
  try {
    const { userId } = loggedUserId;
    if (id !== userId) throw new ValidationError('You are not this user!');

    const user = await UserModel.findById(id);
    return user  

  } catch(e) {
    return e;
  }
};