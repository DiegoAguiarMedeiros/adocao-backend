import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { file, body } = req;
    const {
      userFirstName,
      userLastName,
      userEmail,
      userPhone,
      companyEmail,
      companyName,
      subDomain,
      CNPJ,
    } = body;

    const fileBuffer = file ? file.buffer : null;
    const fileMimetype = file ? file.mimetype : null;

    try {
      await this.createUserUseCase.execute(
        userFirstName,
        userLastName,
        userEmail,
        userPhone,
        companyEmail,
        companyName,
        subDomain,
        CNPJ,
        fileBuffer,
        fileMimetype
      );

      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
