import { IUserRepository } from '../../../repositories/IUserRepository';
import { IValidatorService } from '../../../services/IValidatorService';
import { ICryptService } from '../../../services/ICryptService';

const PASSWORD_LENGTH = 8;

export default class RecoverUserPasswordUseCase {
  constructor(
    private userRepository: IUserRepository,
    private validatorService: IValidatorService,
  ) {}

  execute = async (companyEmail: string) => {
    const isEmailValid = this.validatorService.validateEmail(companyEmail);

    if (!isEmailValid) {
      throw new Error('RecoverUserPasswordUseCase: invalid email.');
    }

    const user = await this.userRepository.findByCompanyEmail(companyEmail);

    if (!user) {
      throw new Error('RecoverUserPasswordUseCase: user not found.');
    }



    const { userFirstName } = user;


  };
}
