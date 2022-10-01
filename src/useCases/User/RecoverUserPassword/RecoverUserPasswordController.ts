import { Request, Response } from 'express';
import RecoverUserPasswordUseCase from './RecoverUserPasswordUseCase';

export default class RecoverUserPasswordController {
  constructor(
    private recoverUserPasswordUseCase: RecoverUserPasswordUseCase,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { companyEmail } = req.body;

    try {
      await this.recoverUserPasswordUseCase.execute(companyEmail);

      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
