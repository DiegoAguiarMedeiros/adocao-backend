import { Response } from 'express';
import IsAuthenticatedUseCase from './IsAuthenticatedUseCase';

export default class IsAuthenticatedController {
  constructor(private isAuthenticatedUseCase: IsAuthenticatedUseCase) {}

  handle = async (req: any, res: Response, next): Promise<Response> => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: 'authorization header not provided.' });
    }

    const [, token] = authHeader.split(' ');

    try {
      const { company, companyId } = await this.isAuthenticatedUseCase.execute(token);
      req.company = company;
      req.companyId = companyId;

      return next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
