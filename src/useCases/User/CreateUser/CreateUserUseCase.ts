import { unMask } from 'remask';

import { IUserRepository } from '../../../repositories/IUserRepository';
import { ICryptService } from '../../../services/ICryptService';
import { IValidatorService } from '../../../services/IValidatorService';
import User from '../../../entities/User';

const HIGHLIGHTS_DEFAULT_NAME = 'Destaques';
const PASSWORD_LENGTH = 8;

export default class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private cryptService: ICryptService,
    private validatorService: IValidatorService,
  ) { }

  execute = async (
    name: string,
    email: string,
    password: string
  ): Promise<void> => {

    const EmailIsvalid =
      this.validatorService.validateEmail(email);
    if (!EmailIsvalid) {
      throw new Error('CreateUserUseCase: email is not valid.');
    }
    const EmailAlreadyExists =
    await this.userRepository.findByEmail(email);
    if (EmailAlreadyExists) {
      throw new Error('CreateUserUseCase: email already exists.');
    }

    if (!name || name.length === 0) {
      throw new Error('CreateUserUseCase: user name is no valid.');
    }

    const emailIsvalid = this.validatorService.validateEmail(email);

    if (!emailIsvalid) {
      throw new Error('CreateUserUseCase: user email is not valid.');
    }


    password = await this.cryptService.hash(password);
    const user = new User({
      name,
      email,
      password,
      active: true,
      admin: false,
      numberAccess: 0,
    });


    const savedUser = await this.userRepository.save(user);

  };
}
