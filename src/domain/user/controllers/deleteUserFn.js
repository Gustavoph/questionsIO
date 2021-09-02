import { UserModel } from '../../../database';

export const deleteUserFn = async (_, { id }, { loggedUserId }) => {
  const { userId } = loggedUserId;
  if (id !== userId) throw new Error('You are not this user!');

  try {
    const deletedUser = await UserModel.deleteOne({ _id: id });
    const { deletedCount } = deletedUser;

    if (deletedCount === 1) return true;
    return false;
  } catch (e) {
    return new Error('Server Error');
  }
};
