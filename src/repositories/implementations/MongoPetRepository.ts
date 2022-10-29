import { IPetRepository } from '../IPetRepository';
import Pet from '../../entities/Pet';
import PetModel from '../models/PetModel';

export default class MongoPetRepository implements IPetRepository {
  async findById(petId: string): Promise<Pet> {
    const findedPet = await PetModel.findOne({ _id: petId });
    return findedPet ? new Pet(findedPet.toJSON()) : null;
  }
  async getAll(user_id: string): Promise<Pet[]> {
    const allPets = await PetModel.find();

    return allPets.map((document) => new Pet(document.toJSON()));
  }

  async save(category: any): Promise<any> {
    const newPet = await PetModel.create(category);
    return newPet.toJSON();
  }

  async update(petId: string, params: any): Promise<Pet> {
    const pet: Pet = await PetModel.findOneAndUpdate(
      { _id: petId },
      { $set: params }
    );
    return pet;
  }

  async delete(petId) {
    await PetModel.findOneAndDelete({ _id: petId });
  }
}
