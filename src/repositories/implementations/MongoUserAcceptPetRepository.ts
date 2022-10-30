import { IUserAcceptPetRepository } from '../IUserAcceptPetRepository';
import Pet from '../../entities/Pet';
import UserAcceptPetModels from '../models/UserAcceptPetModel';

export default class MongoUserAcceptPetRepository implements IUserAcceptPetRepository {


  async getAllUser(id: String): Promise<String[]> {
    const allPetsAcceptsByUser = await UserAcceptPetModels.find({ user: [id] })
    const petsAccepts = []
    allPetsAcceptsByUser.map(({ pet }) => (petsAccepts.push(pet[0])));
    return petsAccepts;
  }
  async getAllPetsByUser(id: String): Promise<Pet[]> {
    const allPetsAcceptsByUser = await UserAcceptPetModels.find({ user: [id] }).populate({
      path: 'pet',
      populate: {
        path: 'company',
      },
    });
    const petsAccepts = []
    console.log('allPetsAcceptsByUser', allPetsAcceptsByUser)
    allPetsAcceptsByUser.map(({ pet }) => (petsAccepts.push(pet[0])));
    return petsAccepts;
  }


  async save(userAcceptPet: any): Promise<any> {
    const newUser = await UserAcceptPetModels.create(userAcceptPet);
    return newUser.toJSON();
  }


  async delete(userId) {
    await UserAcceptPetModels.findOneAndDelete({ _id: userId });
  }
}
