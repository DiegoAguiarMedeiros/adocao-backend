import { IPetRepository } from '../../../repositories/IPetRepository';
import { IUserAcceptPetRepository } from '../../../repositories/IUserAcceptPetRepository';
import { IUserNotAcceptPetRepository } from '../../../repositories/IUserNotAcceptPetRepository';



export default class CreatePetUseCase {
  constructor(private petsRepository: IPetRepository, private userAcceptPetRepository: IUserAcceptPetRepository) { }

  execute = async (
    userId: string
  ): Promise<any[]> => {


    const petAccepts = await this.userAcceptPetRepository.getAllPetsByUser(userId);

    


    return petAccepts;
  };
}
