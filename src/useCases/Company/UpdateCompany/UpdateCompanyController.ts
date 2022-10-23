import { Response } from 'express';
import UpdateCompanyUseCase from './UpdateCompanyUseCase';

export default class UpdateProductController {
  constructor(private updateCompanyUseCase: UpdateCompanyUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { body, company, query } = req;
    const { companyId: anotherCompany } = query;
    const {
      name,
      email,
      password,
      active
    } = body;

    try {
      await this.updateCompanyUseCase.execute(
        company,
        name,
        email,
        password,
        active,
        anotherCompany
      );
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
