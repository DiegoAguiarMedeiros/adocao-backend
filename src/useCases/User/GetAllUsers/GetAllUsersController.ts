import { Response } from 'express';
import GetAllUsersUseCase from './GetAllUsersUseCase';

export default class GetAllUsersController {
  constructor(private getAllUsersUseCase: GetAllUsersUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { user } = req;
    try {
      const users = await this.getAllUsersUseCase.execute(user);

      return res.status(200).send(users);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
