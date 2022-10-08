import { IUserRepository } from '../../../repositories/IUserRepository';

import { IValidatorService } from '../../../services/IValidatorService';
import { ICryptService } from '../../../services/ICryptService';

import User from '../../../entities/User';

export default class UpdateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private validatorService: IValidatorService,
    private cryptService: ICryptService,
  ) {}

  execute = async (
    user: User,
    name: string,
    email: string,
    password: string,
    active: boolean,
    anotherUser: string
  ) => {
    const user_id = user.admin && anotherUser ? anotherUser : user._id;

    const isemailValid = this.validatorService.validateEmail(email);

    if (email && !isemailValid) {
      throw new Error('UpdateUserUseCase: new user email is invalid.');
    }

    const oldUser = await this.userRepository.findByIdWithPassword(user_id);

    const newPassword =
      password && password.trim().length > 0
        ? await this.cryptService.hash(password)
        : oldUser.password;

    const updatedUser = new User({
      ...oldUser,
      active: active ?? oldUser.active,
      name: name || oldUser.name,
      email: email || oldUser.email,
      password: newPassword,
    });

    await this.userRepository.update(user_id, updatedUser);
  };
}
