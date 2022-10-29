import MongoPetRepository from '../../../repositories/implementations/MongoPetRepository';
import GetAllPetUseCase from './GetAllPetUseCase';
import GetAllPetController from './GetAllPetController';

const mongoPetRepository = new MongoPetRepository();

const getAllPetUseCase = new GetAllPetUseCase(mongoPetRepository);

const getAllPetController = new GetAllPetController(
  getAllPetUseCase
);

export default getAllPetController;
