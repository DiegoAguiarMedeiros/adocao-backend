import mongoose from 'mongoose';

const UserAcceptPetSchema = new mongoose.Schema({
  user: [{
    type: mongoose.Types.ObjectId,
    ref: "User"
  }],
  pet: [{
    type: mongoose.Types.ObjectId,
    ref: "Pet"
  }],
});

const UserAcceptPet = mongoose.model<any>('UserAcceptPet', UserAcceptPetSchema);

export default UserAcceptPet;
