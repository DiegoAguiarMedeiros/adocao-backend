import MongoPetRepository from '../../../repositories/implementations/MongoPetRepository';
import MongoUserNotAcceptpetRepository from '../../../repositories/implementations/MongoUserNotAcceptPetRepository';
import MongoUserAcceptpetRepository from '../../../repositories/implementations/MongoUserAcceptPetRepository';
import GetAllPetUseCase from './GetAllPetUseCase';
import GetAllPetController from './GetAllPetController';

const mongoPetRepository = new MongoPetRepository();
const mongoUserNotAcceptpetRepository = new MongoUserNotAcceptpetRepository();
const mongoUserAcceptpetRepository = new MongoUserAcceptpetRepository();

const getAllPetUseCase = new GetAllPetUseCase(mongoPetRepository,mongoUserNotAcceptpetRepository,mongoUserAcceptpetRepository);

const getAllPetController = new GetAllPetController(
  getAllPetUseCase
);

export default getAllPetController;
