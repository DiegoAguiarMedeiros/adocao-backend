import { Response } from 'express';
import UpdateUserUseCase from './UpdateCompanyUseCase';

export default class UpdateProductController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { body, user, query } = req;
    const { companyId: anotherUser } = query;
    const {
      name,
      email,
      password,
      active
    } = body;

    try {
      await this.updateUserUseCase.execute(
        user,
        name,
        email,
        password,
        active,
        anotherUser
      );
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
