import { unMask } from 'remask';

import { IUserAcceptPetRepository } from '../../../repositories/IUserAcceptPetRepository';
import UserAcceptPet from '../../../entities/UserAcceptPet';


export default class CreateUserAcceptPetUseCase {
  constructor(
    private userAcceptPetRepository: IUserAcceptPetRepository
  ) { }

  execute = async (
    user: string,
    pet: string
  ): Promise<UserAcceptPet> => {


    if (!user || user.length === 0) {
      throw new Error('CreateUserAcceptPetUseCase: user is no valid.');
    }
    if (!pet || pet.length === 0) {
      throw new Error('CreateUserAcceptPetUseCase: pet is no valid.');
    }


    console.log('user', user)
    console.log('pet', pet)

    const userAcceptPet = new UserAcceptPet({
      user,
      pet
    });


    const savedUserAcceptPet = await this.userAcceptPetRepository.save(userAcceptPet);

    return savedUserAcceptPet;
  };
}
