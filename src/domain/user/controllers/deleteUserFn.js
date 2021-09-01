import { UserModel } from '../../../database';

export const deleteUserFn = (_, { id }, { loggedUserId }) => {
  const { userId } = loggedUserId;
  if (id !== userId) throw new Error('You are not this user!');

  try {
    const deletedUser = UserModel.findByIdAndRemove(id);
    return deletedUser;

  } catch (e) {
    return new Error('Server Error');
  }
}