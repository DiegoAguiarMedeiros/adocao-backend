import { IUserAcceptPetRepository } from '../IUserAcceptPetRepository';
import UserAcceptPet from '../../entities/UserAcceptPet';
import UserAcceptPetModels from '../models/UserAcceptPetModel';

export default class MongoUserAcceptPetRepository implements IUserAcceptPetRepository {


  async getAllUser(id: String): Promise<String[]> {
    const allPetsAcceptsByUser = await UserAcceptPetModels.find({ user: [id] })
    const petsAccepts = []
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
