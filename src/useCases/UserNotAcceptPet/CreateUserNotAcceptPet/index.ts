import MongoUserNotAcceptPetRepository from '../../../repositories/implementations/MongoUserNotAcceptPetRepository';

import CreateUserNotAcceptPetUseCase from './CreateUserNotAcceptPetUseCase';
import CreateUserNotAcceptPetController from './CreateUserNotAcceptPetController';

const mongoUserNotAcceptPetRepository = new MongoUserNotAcceptPetRepository();


const createUserNotAcceptPetUseCase = new CreateUserNotAcceptPetUseCase(
  mongoUserNotAcceptPetRepository
);

const createUserNotAcceptPetController = new CreateUserNotAcceptPetController(createUserNotAcceptPetUseCase);

export default createUserNotAcceptPetController;
