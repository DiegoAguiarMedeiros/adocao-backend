import { IPetRepository } from '../../../repositories/IPetRepository';
import { IUserAcceptPetRepository } from '../../../repositories/IUserAcceptPetRepository';
import { IUserNotAcceptPetRepository } from '../../../repositories/IUserNotAcceptPetRepository';

export default class CreatePetUseCase {
  constructor(private petsRepository: IPetRepository, private userNotAcceptPetRepository: IUserNotAcceptPetRepository, private userAcceptPetRepository: IUserAcceptPetRepository) { }

  execute = async (
    userId: string
  ): Promise<any[]> => {


    const petNotAccepts = await this.userNotAcceptPetRepository.getAllUser(userId);
    const petAccepts = await this.userAcceptPetRepository.getAllUser(userId);

    const user_id = userId;
    const pets = await this.petsRepository.getAll(user_id);

    const petFilteredWithoutpetNotAccepts = pets.filter((pet) => petNotAccepts.includes(pet._id!))
    const petFilteredWithoutpetNotAcceptsAndAccepts = petFilteredWithoutpetNotAccepts.filter((pet) => petAccepts.includes(pet._id!))

    console.log('petNotAccepts', petNotAccepts)
    console.log('petAccepts', petAccepts)
    console.log('petFilteredWithoutpetNotAcceptsAndAccepts', petFilteredWithoutpetNotAcceptsAndAccepts)


    const formattedPets = petFilteredWithoutpetNotAcceptsAndAccepts.map((pet) => ({
      ...pet,
    }));

    return petFilteredWithoutpetNotAccepts;
  };
}
