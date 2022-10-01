import { IUserRepository } from '../../../repositories/IUserRepository';

import User from '../../../entities/User';

export default class UpdateUserNumberAcessUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute = async () => {
    const users = await this.userRepository.getAllUsers();

    users.map(async (oldUser) => {
      const updatedUser = new User({
        ...oldUser,
        numberAccess: 0,
      });

      await this.userRepository.update(oldUser._id, updatedUser);
    });
  };
}
