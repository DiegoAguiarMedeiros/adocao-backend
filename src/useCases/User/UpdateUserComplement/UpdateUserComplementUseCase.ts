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
    userId: string,
    house: string,
    houseSize: string,
    otherPets: boolean,
    timeInHouse: string,
  ) => {

    console.log('user',userId)
    console.log('house',house)
    console.log('houseSize',houseSize)
    console.log('otherPets',otherPets)
    console.log('timeInHouse',timeInHouse)

    if (house !== 'Casa' && house !== 'Apê') {
      throw new Error('UpdateUserComplementUseCase: house is invalid.');
    }
    if (houseSize !== 'Grande' && houseSize !== 'Médio' && houseSize !== 'Pequeno') {
      throw new Error('UpdateUserComplementUseCase: houseSize is invalid.');
    }
    if (otherPets === undefined) {
      throw new Error('UpdateUserComplementUseCase: otherPets is invalid.');
    }
    if (timeInHouse !== '4 ou menos' && timeInHouse !== '4 a 8 horas' && timeInHouse !== '8 a 12 horas' && timeInHouse !== '12 ou mais') {
      throw new Error('UpdateUserComplementUseCase: timeInHouse is invalid.');
    }


    await this.userRepository.update(userId, {
      house,
      houseSize,
      otherPets,
      timeInHouse
    });
  };
}
