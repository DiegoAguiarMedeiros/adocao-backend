import dayjs from 'dayjs';
import { ITokenService } from '../../services/ITokenService';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';
export default class IsAuthenticatedUseCase {
  constructor(
    private tokenService: ITokenService,
    private companyRepository: ICompanyRepository,
  ) { }

  execute = async (token: string) => {
    const { companyId } = this.tokenService.verify(token);
    const company: any = await this.companyRepository.findById(companyId);

    if (!company) {
      throw new Error('Company does not exists.');
    }

    return {
      companyId,
      company,
    };
  };
}
