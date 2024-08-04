import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tracked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
});

export interface UserInterface {
  _id: string;
  email: string;
  name: string;
  password: string;
}

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;