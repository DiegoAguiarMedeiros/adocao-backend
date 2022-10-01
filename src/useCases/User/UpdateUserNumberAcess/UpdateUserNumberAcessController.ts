import { Response } from 'express';
import UpdateUserNumberAcessUseCase from './UpdateUserNumberAcessUseCase';

export default class UpdateUserNumberAcessController {
  constructor(
    private updateUserNumberAcessUseCase: UpdateUserNumberAcessUseCase
  ) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    try {
      await this.updateUserNumberAcessUseCase.execute();
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
