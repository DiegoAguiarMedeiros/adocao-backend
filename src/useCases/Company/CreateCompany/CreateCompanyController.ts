import { Request, Response } from 'express';
import CreateCompanyUseCase from './CreateCompanyUseCase';

export default class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const {
      name,
      email,
      tel,
      password
    } = body;

      try {
        const newCompany = await this.createCompanyUseCase.execute(
          name,
          email,
          tel,
          password
        );

      return res.status(201).send(newCompany);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
