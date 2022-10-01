import User from '../../../entities/User';
import { IUserServiceMode } from '../../../repositories/IUserServiceMode';
import { IUserRepository } from '../../../repositories/IUserRepository';

export default class CreateProductUseCase {
  constructor(
    private userServiceModeRepository: IUserServiceMode,
    private userRepository: IUserRepository
  ) {}

  execute = async (user: User, anotherUser: string): Promise<any> => {
    const user_id = user.admin && anotherUser ? anotherUser : user._id;

    const selectedUser = await this.userRepository.findById(user_id);

    const operations = await this.userServiceModeRepository.findByUser(user_id);

    const auxArray = ['Atendimento Presencial', 'Delivery', 'Takeaway'];
    const formattedOperations = operations
      .filter((op) => op.active)
      .map((op) => ({
        operationName: op.operationName,
        id: auxArray.findIndex((name) => name === op.operationName),
      }))
      .sort((a, b) => {
        if (a.operationName > b.operationName) return 1;
        if (a.operationName < b.operationName) return -1;
        return 0;
      });

    return { ...selectedUser, operation: formattedOperations };
  };
}
