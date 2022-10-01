import BCryptService from '../../../services/implementations/BCryptService';
import ValidatorService from '../../../services/implementations/ValidatorService';
import MongoUserRepository from '../../../repositories/implementations/MongoUserRepository';

import CreateUserUseCase from './CreateUserUseCase';
import CreateUserController from './CreateUserController';

const mongoUserRepository = new MongoUserRepository();

const bcryptService = new BCryptService();
const validatorService = new ValidatorService();

const createUserUseCase = new CreateUserUseCase(
  mongoUserRepository,
  bcryptService,
  validatorService,
);

const createUserController = new CreateUserController(createUserUseCase);

export default createUserController;
