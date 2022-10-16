import { Response } from 'express';
import UpdateUserComplementUseCase from './UpdateUserComplementUseCase';

export default class UpdateProductController {
  constructor(private updateUserComplementUseCase: UpdateUserComplementUseCase) { }

  handle = async (req: any, res: Response): Promise<Response> => {
    const { body, user, query } = req;
    const { userId: anotherUser } = query;
    const {
      house,
      houseSize,
      otherPets,
      timeInHouse
    } = body;

    try {
      await this.updateUserComplementUseCase.execute(
        user,
        house,
        houseSize,
        otherPets,
        timeInHouse
      );
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
