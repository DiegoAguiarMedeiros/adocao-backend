import mongoose from 'mongoose';

const UserServiceModeSchema = new mongoose.Schema({
  userId: {
    ref: 'User',
    type: mongoose.Types.ObjectId,
    required: true,
  },
  serviceModeId: {
    ref: 'ServiceMode',
    type: mongoose.Types.ObjectId,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

const UserServiceMode = mongoose.model<any>(
  'UserServiceMode',
  UserServiceModeSchema
);

export default UserServiceMode;
