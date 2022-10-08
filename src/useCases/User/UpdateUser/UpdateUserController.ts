import { Response } from 'express';
import UpdateUserUseCase from './UpdateUserUseCase';

export default class UpdateProductController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { body, user, query } = req;
    const { userId: anotherUser } = query;
    const {
      userFirstName,
      userLastName,
      email,
      userPhone,
      operation,
      fantasyName,
      companyName,
      CNPJ,
      stateRegister,
      CEP,
      state,
      city,
      street,
      addressNumber,
      addressComplement,
      facebookPixel,
      password,
      active,
      subDomain,
    } = body;

    try {
      await this.updateUserUseCase.execute(
        user,
        userFirstName,
        userLastName,
        email,
        userPhone,
        operation,
        fantasyName,
        companyName,
        CNPJ,
        stateRegister,
        CEP,
        state,
        city,
        street,
        addressNumber,
        addressComplement,
        facebookPixel,
        password,
        active,
        anotherUser,
        subDomain
      );
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
