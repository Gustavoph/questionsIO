import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lower: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});
