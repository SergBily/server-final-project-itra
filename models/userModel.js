import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    status: { type: String, default: 'unblock' },
  },
  {
    timestamps: true,
  },
);

const UserModel = model('User', UserSchema);
export default UserModel;
