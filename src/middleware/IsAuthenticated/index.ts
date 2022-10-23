import JWTTokenService from '../../services/implementations/JWTTokenService';

import MongoUserRepository from '../../repositories/implementations/MongoUserRepository';
import IsAuthenticatedUseCase from './IsAuthenticatedUseCase';
import IsAuthenticatedController from './IsAuthenticatedController';

const jwtTokenService = new JWTTokenService();
const mongoUserRepository = new MongoUserRepository();

const isAuthenticatedUseCase = new IsAuthenticatedUseCase(
  jwtTokenService,
  mongoUserRepository,
);

const isAuthenticatedController = new IsAuthenticatedController(
  isAuthenticatedUseCase
);

export default isAuthenticatedController;
