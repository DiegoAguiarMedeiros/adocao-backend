import { Request, Response } from 'express';
import CreatePetUseCase from './CreatePetUseCase';

export default class CreatePetController {
  constructor(private createPetUseCase: CreatePetUseCase) { }

  handle = async (req: any, res: Response): Promise<Response> => {
    const { body, company } = req;
    const {
      name,
      breed,
      description,
      size,
      sociable
    } = body;

    try {
      const newPet = await this.createPetUseCase.execute(
        company._id,
        name,
        breed,
        description,
        size,
        sociable
      );

      return res.status(201).send(newPet);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
