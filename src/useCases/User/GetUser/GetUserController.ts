import { Response } from 'express';
import GetUserUseCase from './GetUserUseCase';

export default class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { user, query } = req;
    const { userId: anotherUser } = query;
    try {
      const userInfo = await this.getUserUseCase.execute(user, anotherUser);

      return res.status(200).send(userInfo);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
