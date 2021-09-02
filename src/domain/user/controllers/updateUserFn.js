import { verifyEmailExists } from '../utils/verifyEmail';
import { UserModel } from '../../../database';

export const updateUserFn = async (_, { userId, data }, { loggedUserId }) => {
  const { userName, email } = data;

  if (userId !== loggedUserId.userId) throw new Error('You are not this user!');

  try {
    let user = await UserModel.findById({ _id: userId });

    if (email === user.email && userName === user.userName) return user;

    if (email !== user.email) await verifyEmailExists(UserModel, email);

    user = await UserModel.updateOne({ _id: userId }, { ...data });

    if (user.nModified === 1) return { _id: userId, userName, email };
  } catch (err) {
    return new Error({ error: 'Server error' });
  }
};
