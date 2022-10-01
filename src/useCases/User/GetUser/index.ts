import GetUserUseCase from './GetUserUseCase';
import GetUserController from './GetUserController';
import MongoUserServiceModeRepository from '../../../repositories/implementations/MongoUserServiceModeRepository';
import MongoUserRepository from '../../../repositories/implementations/MongoUserRepository';

const mongoUserServiceModeRepository = new MongoUserServiceModeRepository();
const mongoUserRepository = new MongoUserRepository();

const getUserUseCase = new GetUserUseCase(
  mongoUserServiceModeRepository,
  mongoUserRepository
);

const getUserController = new GetUserController(getUserUseCase);

export default getUserController;
