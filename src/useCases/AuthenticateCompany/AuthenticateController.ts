import { Request, Response } from 'express';
import AuthenticateCompanyCase from './AuthenticateUseCase';

export default class AuthenticateController {
  constructor(
    private authenticateCompanyCase: AuthenticateCompanyCase,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    try {
      const CompanyrAndToken = await this.authenticateCompanyCase.execute(email, password);
      return res.status(200).send(CompanyrAndToken);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
