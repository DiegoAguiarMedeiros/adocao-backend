import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const {
      name,
      email,
      house,
      houseSize,
      otherPets,
      timeInHouse,
      password,
    } = body;

    try {
      const newUser = await this.createUserUseCase.execute(
        name,
        email,
        house,
        houseSize,
        otherPets,
        timeInHouse,
        password
      );

      return res.status(201).send(newUser);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
