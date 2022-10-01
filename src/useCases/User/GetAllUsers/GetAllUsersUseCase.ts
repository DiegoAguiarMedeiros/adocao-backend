import User from "../../../entities/User";
import { IUserServiceMode } from "../../../repositories/IUserServiceMode";
import { IUserRepository } from "../../../repositories/IUserRepository";

export default class GetAllUsersUseCase {
  constructor(
    private userServiceModeRepository: IUserServiceMode,
    private userRepository: IUserRepository
  ) {}

  execute = async (user: User): Promise<any> => {
    if (!user.admin) {
      throw new Error(
        "GetAllUsersUseCase: user does not have permission to access this data"
      );
    }

    const allUsers = await this.userRepository.getAllUsers();

    const formattedUsers = allUsers
      .filter((user) => !user.admin)
      .map(async (user) => {
        const operations = await this.userServiceModeRepository.findByUser(
          user._id
        );

        const auxArray = ["Atendimento Presencial", "Delivery", "Takeaway"];
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
        return { ...user, operation: formattedOperations };
      });

    const promises = await Promise.all(formattedUsers);

    return promises;
  };
}
