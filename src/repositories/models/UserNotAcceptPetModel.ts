import mongoose from 'mongoose';

const UserNotAcceptPetSchema = new mongoose.Schema({
  user: [{
    type: mongoose.Types.ObjectId,
    ref: "User"
  }],
  pet: [{
    type: mongoose.Types.ObjectId,
    ref: "Pet"
  }],
});

const UserNotAcceptPet = mongoose.model<any>('UserNotAcceptPet', UserNotAcceptPetSchema);

export default UserNotAcceptPet;
