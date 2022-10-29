import { Response } from 'express';
import GetAllPettUseCase from './GetAllPetUseCase';

export default class GetAllPettController {
  constructor(private getAllPettUseCase: GetAllPettUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { userId, query, user } = req;
    const { userId: anotherUser } = query;
    try {
      const petts = await this.getAllPettUseCase.execute(
        userId,
        user.admin,
        anotherUser
      );
      return res.status(200).send({ petts });
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
