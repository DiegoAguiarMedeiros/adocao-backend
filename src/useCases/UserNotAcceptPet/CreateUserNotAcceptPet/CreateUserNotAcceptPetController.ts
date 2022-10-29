import { Request, Response } from 'express';
import CreateUserNotAcceptPetUseCase from './CreateUserNotAcceptPetUseCase';

export default class CreateUserNotAcceptPetController {
  constructor(private createUserNotAcceptPetUseCase: CreateUserNotAcceptPetUseCase) { }

  handle = async (req: any, res: Response): Promise<Response> => {
    const { user, body } = req;
    const {
      pet
    } = body;

    try {
      const newUserNotAcceptPet = await this.createUserNotAcceptPetUseCase.execute(
        user,
        pet
      );

      return res.status(201).send(newUserNotAcceptPet);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
