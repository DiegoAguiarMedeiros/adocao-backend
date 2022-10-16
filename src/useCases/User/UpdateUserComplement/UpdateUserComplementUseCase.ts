import { IUserRepository } from '../../../repositories/IUserRepository';

import { IValidatorService } from '../../../services/IValidatorService';
import { ICryptService } from '../../../services/ICryptService';

import User from '../../../entities/User';

export default class UpdateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private validatorService: IValidatorService,
    private cryptService: ICryptService,
  ) { }

  execute = async (
    user: User,
    house: string,
    houseSize: string,
    otherPets: boolean,
    timeInHouse: string,
  ) => {

    if (house !== 'Casa' && house !== 'Apê') {
      throw new Error('UpdateUserComplementUseCase: house is invalid.');
    }
    if (houseSize !== 'Grande' && houseSize !== 'Médio' && houseSize !== 'Pequeno') {
      throw new Error('UpdateUserComplementUseCase: house is invalid.');
    }
    if (otherPets !== undefined) {
      throw new Error('UpdateUserComplementUseCase: house is invalid.');
    }
    if (timeInHouse !== '4 ou menos' && timeInHouse !== '4 a 8 horas' && timeInHouse !== '8 a 12 horas' && timeInHouse !== '12 ou mais') {
      throw new Error('UpdateUserComplementUseCase: house is invalid.');
    }


    await this.userRepository.update(user._id, {
      house,
      houseSize,
      otherPets,
      timeInHouse
    });
  };
}
