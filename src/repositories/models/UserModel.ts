import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  house: {
    type: String,
    required: true,
  },
  houseSize: {
    type: String,
    required: true,
  },
  otherPets: {
    type: Boolean,
    required: true,
  },
  timeInHouse: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  logoUrl: {
    type: String,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  admin: {
    type: Boolean,
    default: false,
    required: true,
  },
  numberAccess: {
    type: Number,
    required: true,
  },
  registerCompleted: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model<any>('User', UserSchema);

export default User;
