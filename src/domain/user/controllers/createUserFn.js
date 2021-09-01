import { UserModel } from '../../../database';
import { verifyInput } from '../utils/verifyInput';
import { verifyEmailExists } from '../utils/verifyEmail';
import { generatePasswordHash } from '../utils/HashPassword';

export const createUserFn = async (_, { data }, { pubsub }) => {
  console.log(pubsub);
  await verifyInput(data);
  await verifyEmailExists(UserModel, data.email);

  const newPassword = await generatePasswordHash(data.password);
  const user = await UserModel.create({ ...data, password: newPassword });
  pubsub.publish('USER_CREATED', { createdUser: user });
  return user;
};
