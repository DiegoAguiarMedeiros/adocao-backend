import { IPetRepository } from '../../../repositories/IPetRepository';
import Pet from '../../../entities/Pet';

export default class CreatePetUseCase {
  constructor(private petsRepository: IPetRepository) { }

  execute = async (
    userId: string,
    userAdmin: boolean,
    anotherUser: string
  ): Promise<any[]> => {
    const user_id = userId;
    const pets = await this.petsRepository.getAll(user_id);
    const formattedPets = pets.map((pet) => ({
      ...pet,
    }));

    return formattedPets;
  };
}
