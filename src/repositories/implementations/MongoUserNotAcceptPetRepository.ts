import { IUserNotAcceptPetRepository } from '../IUserNotAcceptPetRepository';
import UserNotAcceptPet from '../../entities/UserNotAcceptPet';
import UserNotAcceptPetModels from '../models/UserNotAcceptPetModel';

export default class MongoUserNotAcceptPetRepository implements IUserNotAcceptPetRepository {

  async getAllUser(id: String): Promise<String[]> {
    const allPetsNotAcceptsByUser = await UserNotAcceptPetModels.find({ user: [id] })
    const petsNotAccepts = []
    allPetsNotAcceptsByUser.map(({ pet }) => (petsNotAccepts.push(pet[0])));
    return petsNotAccepts;
  }

  async save(userNotAcceptPet: any): Promise<any> {
    const newUser = await UserNotAcceptPetModels.create(userNotAcceptPet);
    return newUser.toJSON();
  }


  async delete(userId) {
    await UserNotAcceptPetModels.findOneAndDelete({ _id: userId });
  }
}
