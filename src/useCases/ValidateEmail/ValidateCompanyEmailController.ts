import { Request, Response } from 'express';
import ValidateCompanyEmailUseCase from './ValidateCompanyEmailUseCase';

export default class ValidateCompanyEmailController {
  constructor(
    private validateCompanyEmailUseCase: ValidateCompanyEmailUseCase,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { companyEmail } = req.body;

    try {
      const response = await this.validateCompanyEmailUseCase.execute(companyEmail);
      return res.status(200).send(response);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
