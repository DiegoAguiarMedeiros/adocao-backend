import { unMask } from 'remask';

import { ICompanyRepository } from '../../../repositories/ICompanyRepository';
import { ICryptService } from '../../../services/ICryptService';
import { IValidatorService } from '../../../services/IValidatorService';
import Company from '../../../entities/Company';


export default class CreateCompanyUseCase {
  constructor(
    private CompanyRepository: ICompanyRepository,
    private cryptService: ICryptService,
    private validatorService: IValidatorService,
  ) { }

  execute = async (
    name: string,
    email: string,
    tel: string,
    password: string
  ): Promise<Company> => {

    const EmailIsvalid =
      this.validatorService.validateEmail(email);
    if (!EmailIsvalid) {
      throw new Error('CreateCompanyUseCase: email is not valid.');
    }
    const EmailAlreadyExists =
      await this.CompanyRepository.findByEmail(email);
    if (EmailAlreadyExists) {
      throw new Error('CreateCompanyUseCase: email already exists.');
    }

    if (!tel || tel.length === 0) {
      throw new Error('CreateCompanyUseCase: Company phone is no valid.');
    }
    if (!name || name.length === 0) {
      throw new Error('CreateCompanyUseCase: Company name is no valid.');
    }

    const emailIsvalid = this.validatorService.validateEmail(email);

    if (!emailIsvalid) {
      throw new Error('CreateCompanyUseCase: Company email is not valid.');
    }


    password = await this.cryptService.hash(password);
    const company = new Company({
      name,
      email,
      tel,
      password,
      active: true,
    });

    const savedCompany = await this.CompanyRepository.save(company);

    return savedCompany;
  };
}
