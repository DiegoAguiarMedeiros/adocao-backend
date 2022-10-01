import { Response } from "express";
import SetAdminUseCase from "./SetAdminUseCase";

export default class GetUserController {
  constructor(private setAdminUseCase: SetAdminUseCase) {}

  handle = async (req: any, res: Response): Promise<Response> => {
    const { query } = req;
    const { cnpj, password } = query;

    try {
      await this.setAdminUseCase.execute(cnpj, password);

      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  };
}
