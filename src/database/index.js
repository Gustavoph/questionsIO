import mongoose from 'mongoose';
import { UserSchema } from '../domain/user/schema';
import { configDb } from './config.json';

mongoose.connect(configDb.url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

const UserModel = mongoose.model('user', UserSchema);

export { UserModel };
