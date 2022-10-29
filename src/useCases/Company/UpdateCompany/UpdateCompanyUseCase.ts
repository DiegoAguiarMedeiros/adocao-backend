import { ICompanyRepository } from '../../../repositories/ICompanyRepository';

import { IValidatorService } from '../../../services/IValidatorService';
import { ICryptService } from '../../../services/ICryptService';

import Company from '../../../entities/Company';

export default class UpdateCompanyUseCase {
  constructor(
    private CompanyRepository: ICompanyRepository,
    private validatorService: IValidatorService,
    private cryptService: ICryptService,
  ) {}

  execute = async (
    company: Company,
    name: string,
    email: string,
    tel: string,
    active: boolean,
    anotherUser
  ) => {
    const Company_id = anotherUser ? anotherUser : company._id;

    const isemailValid = this.validatorService.validateEmail(email);

    if (email && !isemailValid) {
      throw new Error('UpdateCompanyUseCase: new Company email is invalid.');
    }

    const oldCompany = await this.CompanyRepository.findByIdWithPassword(Company_id);

    const newPassword = oldCompany.password;

    const updatedCompany = new Company({
      ...oldCompany,
      active: active ?? oldCompany.active,
      name: name || oldCompany.name,
      email: email || oldCompany.email,
      tel: tel || oldCompany.tel,
      password: newPassword,
    });

    await this.CompanyRepository.update(Company_id, updatedCompany);
  };
}
