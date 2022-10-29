import { IPetRepository } from '../../../repositories/IPetRepository';
import Pet from '../../../entities/Pet';

export default class GetOnePetUseCase {
  constructor(private petsRepository: IPetRepository) { }

  execute = async (
    id: string
  ): Promise<any> => {

    const pet = await this.petsRepository.findById(id);

    if (!pet) {
      throw new Error('GetOnePetUseCase: invalid id.');
    }


    return pet;
  };
}
