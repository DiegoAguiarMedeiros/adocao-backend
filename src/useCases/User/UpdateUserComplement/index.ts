import MongoUserRepository from '../../../repositories/implementations/MongoUserRepository';

import BCryptService from '../../../services/implementations/BCryptService';
import ValidatorService from '../../../services/implementations/ValidatorService';

import UpdateUserUseCase from './UpdateUserComplementUseCase';
import UpdateUserController from './UpdateUserComplementController';

const mongoUserRepository = new MongoUserRepository();

const bcryptService = new BCryptService();
const validatorService = new ValidatorService();

const updateUserUseCase = new UpdateUserUseCase(
  mongoUserRepository,
  validatorService,
  bcryptService,
);

const updateUserController = new UpdateUserController(updateUserUseCase);

export default updateUserController;
