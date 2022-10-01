import MongoUserRepository from '../../repositories/implementations/MongoUserRepository';
import MongoUserServiceModeRepository from '../../repositories/implementations/MongoUserServiceModeRepository';

import BCryptService from '../../services/implementations/BCryptService';
import JWTTokenService from '../../services/implementations/JWTTokenService';
import AuthenticationUseCase from './AuthenticateUseCase';
import AuthenticationController from './AuthenticateController';

const mongoUserRepository = new MongoUserRepository();
const mongoUserServiceModeRepository = new MongoUserServiceModeRepository();
const bCryptService = new BCryptService();
const jwtTokenService = new JWTTokenService();

const authenticationUseCase = new AuthenticationUseCase(
  mongoUserRepository,
  bCryptService,
  jwtTokenService,
  mongoUserServiceModeRepository
);

const authenticationController = new AuthenticationController(
  authenticationUseCase
);

export default authenticationController;
