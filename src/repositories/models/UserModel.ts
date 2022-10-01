import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userFirstName: {
    type: String,
    required: true,
  },
  userLastName: {
    type: String,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPhone: {
    type: String,
    required: true,
  },
  subDomain: {
    type: String,
    required: true,
    unique: true,
  },
  fantasyName: {
    type: String,
  },
  companyName: {
    type: String,
    required: true,
  },
  CNPJ: {
    type: String,
  },
  stateRegister: {
    type: String,
  },
  CEP: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  street: {
    type: String,
  },
  addressNumber: {
    type: String,
  },
  addressComplement: {
    type: String,
  },
  operation: {
    type: [Number],
  },
  facebookPixel: {
    type: String,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  active: {
    type: Boolean,
    required: true,
  },
  logoUrl: {
    type: String,
  },
  highlightsCategory: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
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
});

const User = mongoose.model<any>('User', UserSchema);

export default User;
