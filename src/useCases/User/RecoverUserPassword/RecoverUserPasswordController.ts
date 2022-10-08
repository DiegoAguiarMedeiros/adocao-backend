import { Request, Response } from 'express';
import RecoverUserPasswordUseCase from './RecoverUserPasswordUseCase';

export default class RecoverUserPasswordController {
  constructor(
    private recoverUserPasswordUseCase: RecoverUserPasswordUseCase,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { Email } = req.body;

    try {
      await this.recoverUserPasswordUseCase.execute(Email);

      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
