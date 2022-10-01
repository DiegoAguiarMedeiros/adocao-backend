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
    userFirstName: string,
    userLastName: string,
    userEmail: string,
    userPhone: string,
    operation: number[],
    fantasyName: string,
    companyName: string,
    CNPJ: string,
    stateRegister: string,
    CEP: string,
    state: string,
    city: string,
    street: string,
    addressNumber: string,
    addressComplement: string,
    facebookPixel: string,
    password: string,
    active: boolean,
    anotherUser: string,
    subDomain: string
  ) => {
    const user_id = user.admin && anotherUser ? anotherUser : user._id;

    const isUserEmailValid = this.validatorService.validateEmail(userEmail);

    if (userEmail && !isUserEmailValid) {
      throw new Error('UpdateUserUseCase: new user email is invalid.');
    }

    const isUserPhoneValid =
      this.validatorService.validatePhoneNumber(userPhone);

    if (userPhone && !isUserPhoneValid) {
      throw new Error('UpdateUserUseCase: new user phone is invalid.');
    }

    const isCNPJValid = this.validatorService.validateCNPJ(CNPJ);
    if (CNPJ && !isCNPJValid) {
      throw new Error('UpdateUserUseCase: new user CNPJ is invalid.');
    }

    const isCEPValid = this.validatorService.validateCEP(CEP);

    if (CEP && !isCEPValid) {
      throw new Error('UpdateUserUseCase: new user CEP is invalid.');
    }

    const oldUser = await this.userRepository.findByIdWithPassword(user_id);

    const existSubDomain = await this.userRepository.findBySubDomain(subDomain);

    if (subDomain && subDomain !== oldUser.subDomain && existSubDomain) {
      throw new Error('UpdateUserUseCase: new user subDomain alredy exists.');
    }

    const newPassword =
      password && password.trim().length > 0
        ? await this.cryptService.hash(password)
        : oldUser.password;

    const updatedUser = new User({
      ...oldUser,
      active: active ?? oldUser.active,
      userFirstName: userFirstName || oldUser.userFirstName,
      userLastName: userLastName || oldUser.userLastName,
      userEmail: userEmail || oldUser.userEmail,
      userPhone: userPhone || oldUser.userPhone,
      operation: operation || oldUser.operation,
      fantasyName: fantasyName || oldUser.fantasyName,
      companyName: companyName || oldUser.companyName,
      CNPJ: CNPJ || oldUser.CNPJ,
      stateRegister: stateRegister || oldUser.stateRegister,
      CEP: CEP || oldUser.CEP,
      state: state || oldUser.state,
      city: city || oldUser.city,
      street: street || oldUser.street,
      addressNumber: addressNumber || oldUser.addressNumber,
      addressComplement: addressComplement || oldUser.addressComplement,
      facebookPixel: facebookPixel || oldUser.facebookPixel,
      subDomain: subDomain || oldUser.subDomain,
      password: newPassword,
    });

    await this.userRepository.update(user_id, updatedUser);
  };
}
