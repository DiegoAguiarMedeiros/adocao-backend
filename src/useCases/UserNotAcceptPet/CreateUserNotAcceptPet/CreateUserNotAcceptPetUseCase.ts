import { unMask } from 'remask';

import { IUserNotAcceptPetRepository } from '../../../repositories/IUserNotAcceptPetRepository';
import UserNotAcceptPet from '../../../entities/UserNotAcceptPet';


export default class CreateUserNotAcceptPetUseCase {
  constructor(
    private userNotAcceptPetRepository: IUserNotAcceptPetRepository
  ) { }

  execute = async (
    user: string,
    pet: string
  ): Promise<UserNotAcceptPet> => {


    if (!user || user.length === 0) {
      throw new Error('CreateUserNotAcceptPetUseCase: user is no valid.');
    }
    if (!pet || pet.length === 0) {
      throw new Error('CreateUserNotAcceptPetUseCase: pet is no valid.');
    }


    console.log('user', user)
    console.log('pet', pet)

    const userNotAcceptPet = new UserNotAcceptPet({
      user,
      pet
    });


    const savedUserNotAcceptPet = await this.userNotAcceptPetRepository.save(userNotAcceptPet);

    return savedUserNotAcceptPet;
  };
}
