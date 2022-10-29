import { Response } from 'express';
import GetAllProductUseCase from './GetOnePetUseCase';

export default class GetOneProductController {
  constructor(private getAllProductUseCase: GetAllProductUseCase) { }

  handle = async (req: any, res: Response): Promise<Response> => {
    const { petId, query, pet, params } = req;
    const { id: id } = query;
    try {
      console.log('query', query)
      console.log('pet', pet)
      console.log('id', id)
      const products = await this.getAllProductUseCase.execute(
        id
      );
      return res.status(200).send({ products });
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
