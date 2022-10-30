import { IPetRepository } from '../../../repositories/IPetRepository';
import { IUserAcceptPetRepository } from '../../../repositories/IUserAcceptPetRepository';
import { IUserNotAcceptPetRepository } from '../../../repositories/IUserNotAcceptPetRepository';

const removeFormArray = (array, string) => {
  let retorno = true;
  for (let i = 0; i < array.length; i++) {
    console.log(String(array[i]), String(array[i]) === String(string), string)
    if (String(array[i]) === String(string)) { retorno = false; }
  }
  return retorno;
}

export default class CreatePetUseCase {
  constructor(private petsRepository: IPetRepository, private userNotAcceptPetRepository: IUserNotAcceptPetRepository, private userAcceptPetRepository: IUserAcceptPetRepository) { }

  execute = async (
    userId: string
  ): Promise<any[]> => {


    const petNotAccepts = await this.userNotAcceptPetRepository.getAllUser(userId);
    const petAccepts = await this.userAcceptPetRepository.getAllUser(userId);

    const user_id = userId;
    const pets = await this.petsRepository.getAll(user_id);

    const petFilteredWithoutpetNotAccepts = pets.filter(({ _id }) => removeFormArray(petNotAccepts, _id))
    const petFilteredWithoutpetNotAcceptsAndAccepts = petFilteredWithoutpetNotAccepts.filter(({ _id }) => removeFormArray(petAccepts, _id))

    console.log('petNotAccepts', petNotAccepts)
    console.log('petAccepts', petAccepts)
    console.log('petFilteredWithoutpetNotAcceptsAndAccepts', petFilteredWithoutpetNotAcceptsAndAccepts)

    return petFilteredWithoutpetNotAcceptsAndAccepts;
  };
}
