import { IUserRepository } from '../../repositories/IUserRepository';
import { IValidatorService } from '../../services/IValidatorService';

export default class ValidateCompanyEmailUseCase {
  constructor(
    private userRepository: IUserRepository,
    private validatorService: IValidatorService,
  ) {}

  execute = async (email: string): Promise<any> => {
    const isValid = this.validatorService.validateEmail(email);

    const userAlreadyExists = await this.userRepository.findByCompanyEmail(email);

    return {
      canBeUsed: !userAlreadyExists && isValid,
    };
  };
}
