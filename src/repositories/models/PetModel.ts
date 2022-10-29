import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    required: false,
  },
  sociable: {
    type: Boolean,
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
  },
  imgs: [String],
  company: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Company',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const User = mongoose.model<any>('Pet', PetSchema);

export default User;
