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
    userFirstName: string,
    userLastName: string,
    userEmail: string,
    userPhone: string,
    companyEmail: string,
    companyName: string,
    subDomain: string,
    CNPJ: string,
    fileBuffer: Buffer,
    fileMimetype: string
  ): Promise<void> => {
    const companyEmailIsvalid =
      this.validatorService.validateEmail(companyEmail);
    const unMaskedCNPJ = unMask(CNPJ);
    if (!companyEmailIsvalid) {
      throw new Error('CreateUserUseCase: company email is not valid.');
    }
    const companyEmailAlreadyExists =
      await this.userRepository.findByCompanyEmail(companyEmail);

    if (companyEmailAlreadyExists) {
      throw new Error('CreateUserUseCase: company email already exists.');
    }

    if (!userLastName || userLastName.length === 0) {
      throw new Error('CreateUserUseCase: user last name is no valid.');
    }

    const userEmailIsvalid = this.validatorService.validateEmail(userEmail);

    if (!userEmailIsvalid) {
      throw new Error('CreateUserUseCase: user email is not valid.');
    }

    const userPhoneIsValid =
      this.validatorService.validatePhoneNumber(userPhone);

    if (!userPhoneIsValid) {
      throw new Error('CreateUserUseCase: user phone is not valid.');
    }

    const subDomainAlreadyExists = await this.userRepository.findBySubDomain(
      subDomain
    );

    if (subDomainAlreadyExists) {
      throw new Error('CreateUserUseCase: sub domain already exists.');
    }

    const subDomainIsvalid = this.validatorService.validateSubDomain(subDomain);

    if (!subDomainIsvalid) {
      throw new Error('CreateUserUseCase: subDomain is not valid.');
    }

    const cnpjIsValid = this.validatorService.validateCNPJ(unMaskedCNPJ);

    if (!cnpjIsValid) {
      throw new Error('CreateUserUseCase: CNPJ is not valid.');
    }

    const passwordHash = "asd"
    const user = new User({
      userFirstName,
      userLastName,
      userEmail,
      userPhone,
      companyName,
      companyEmail,
      subDomain,
      password: passwordHash,
      active: true,
      CNPJ: unMaskedCNPJ,
      admin: false,
      numberAccess: 0,
    });


    const savedUser = await this.userRepository.save(user);

  };
}
