import { ICompanyRepository } from '../../repositories/ICompanyRepository';

import { ICryptService } from '../../services/ICryptService';
import { ITokenService } from '../../services/ITokenService';

export default class AuthenticateUseCase {
  constructor(
    private CompanyRepository: ICompanyRepository,
    private cryptService: ICryptService,
    private tokenService: ITokenService,
  ) {}
  
  execute = async (email: string, password: string) => {
    const company = await this.CompanyRepository.findByEmailWithPassword(
      email
      );
    if (!company) {
      throw new Error('AuthenticateUseCase: Company not found.');
    }

    const passwordVerification = await this.cryptService.compare(
      password,
      company.password
    );

    if (!passwordVerification) {
      throw new Error('AuthenticateUseCase: invalid password.');
    }

    if (!company.active) {
      throw new Error('AuthenticateUseCase: Company inactive.');
    }

    company.password = undefined;


    const CompanyWithIsFirstLogin = {
      ...company
    };

    const token = this.tokenService.sign({ companyId: company._id });

    return { Company: CompanyWithIsFirstLogin, token };
  };
}
