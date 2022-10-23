import { unMask } from 'remask';

import { IPetRepository } from '../../../repositories/IPetRepository';
import { ICryptService } from '../../../services/ICryptService';
import { IValidatorService } from '../../../services/IValidatorService';
import Pet from '../../../entities/Pet';


export default class CreatePetUseCase {
  constructor(
    private petRepository: IPetRepository
  ) { }

  execute = async (
    company: string,
    name: string,
    breed: string,
    description: string,
    size: string,
    sociable: boolean
  ): Promise<Pet> => {

    const pet = new Pet({
      company,
      name,
      breed,
      description,
      size,
      active: true,
      sociable
    });


    const savedPet = await this.petRepository.save(pet);

    return savedPet;
  };
}
