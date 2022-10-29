import MongoPetRepository from '../../../repositories/implementations/MongoPetRepository';
import GetOnePetUseCase from './GetOnePetUseCase';
import GetOnePetController from './GetOnePetController';

const mongoPetRepository = new MongoPetRepository();

const getOnePetUseCase = new GetOnePetUseCase(mongoPetRepository);

const getOnePetController = new GetOnePetController(
  getOnePetUseCase
);

export default getOnePetController;
