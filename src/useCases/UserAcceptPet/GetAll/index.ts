import MongoPetRepository from '../../../repositories/implementations/MongoPetRepository';
import MongoUserAcceptpetRepository from '../../../repositories/implementations/MongoUserAcceptPetRepository';
import GetAllPetUseCase from './GetAllUserAcceptPetUseCase';
import GetAllPetController from './GetAllUserAcceptPetController';

const mongoPetRepository = new MongoPetRepository();
const mongoUserAcceptpetRepository = new MongoUserAcceptpetRepository();

const getAllPetUseCase = new GetAllPetUseCase(mongoPetRepository,mongoUserAcceptpetRepository);

const getAllPetController = new GetAllPetController(
  getAllPetUseCase
);

export default getAllPetController;
