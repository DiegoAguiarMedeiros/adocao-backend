import GetUserUseCase from './GetAllUsersUseCase';
import GetAllUsersController from './GetAllUsersController';
import MongoUserServiceModeRepository from '../../../repositories/implementations/MongoUserServiceModeRepository';
import MongoUserRepository from '../../../repositories/implementations/MongoUserRepository';

const mongoUserServiceModeRepository = new MongoUserServiceModeRepository();
const mongoUserRepository = new MongoUserRepository();

const getUserUseCase = new GetUserUseCase(
  mongoUserServiceModeRepository,
  mongoUserRepository
);

const getUserController = new GetAllUsersController(getUserUseCase);

export default getUserController;
