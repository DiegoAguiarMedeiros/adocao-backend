import { ConfigurationServicePlaceholders } from 'aws-sdk/lib/config_service_placeholders';
import { Request, Response } from 'express';
import CreateUserAcceptPetUseCase from './CreateUserAcceptPetUseCase';

export default class CreateUserAcceptPetController {
  constructor(private createUserAcceptPetUseCase: CreateUserAcceptPetUseCase) { }

  handle = async (req: any, res: Response): Promise<Response> => {
    const { user, body } = req;
    const {
      pet
    } = body;
    try {
      const newUserAcceptPet = await this.createUserAcceptPetUseCase.execute(
        user,
        pet
      );

      return res.status(201).send(newUserAcceptPet);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
