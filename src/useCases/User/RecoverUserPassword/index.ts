import ValidatorService from '../../../services/implementations/ValidatorService';
import MongoUserRepository from '../../../repositories/implementations/MongoUserRepository';
import RecoverUserPasswordUseCase from './RecoverUserPasswordUseCase';
import RecoverUserPasswordController from './RecoverUserPasswordController';

const mongoUserRepository = new MongoUserRepository();

const validatorService = new ValidatorService();

const recoverUserPasswordUseCase = new RecoverUserPasswordUseCase(
  mongoUserRepository,
  validatorService,
);

const recoverUserPasswordController = new RecoverUserPasswordController(
  recoverUserPasswordUseCase
);

export default recoverUserPasswordController;
