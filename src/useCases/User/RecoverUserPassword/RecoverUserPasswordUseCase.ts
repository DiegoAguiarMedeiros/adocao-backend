import { IUserRepository } from '../../../repositories/IUserRepository';
import { IValidatorService } from '../../../services/IValidatorService';
import { ICryptService } from '../../../services/ICryptService';

const PASSWORD_LENGTH = 8;

export default class RecoverUserPasswordUseCase {
  constructor(
    private userRepository: IUserRepository,
    private validatorService: IValidatorService,
  ) {}

  execute = async (Email: string) => {
    const isEmailValid = this.validatorService.validateEmail(Email);

    if (!isEmailValid) {
      throw new Error('RecoverUserPasswordUseCase: invalid email.');
    }

    const user = await this.userRepository.findByEmail(Email);

    if (!user) {
      throw new Error('RecoverUserPasswordUseCase: user not found.');
    }



    const { userFirstName } = user;


  };
}
