import MongoUserAcceptPetRepository from '../../../repositories/implementations/MongoUserAcceptPetRepository';

import CreateUserAcceptPetUseCase from './CreateUserAcceptPetUseCase';
import CreateUserAcceptPetController from './CreateUserAcceptPetController';

const mongoUserAcceptPetRepository = new MongoUserAcceptPetRepository();


const createUserAcceptPetUseCase = new CreateUserAcceptPetUseCase(
  mongoUserAcceptPetRepository
);

const createUserAcceptPetController = new CreateUserAcceptPetController(createUserAcceptPetUseCase);

export default createUserAcceptPetController;
