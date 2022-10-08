import { Request, Response } from 'express';
import ValidateEmailUseCase from './ValidateEmailUseCase';

export default class ValidateEmailController {
  constructor(
    private validateEmailUseCase: ValidateEmailUseCase,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { Email } = req.body;

    try {
      const response = await this.validateEmailUseCase.execute(Email);
      return res.status(200).send(response);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
