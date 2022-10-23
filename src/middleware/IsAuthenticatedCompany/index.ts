import JWTTokenService from '../../services/implementations/JWTTokenService';

import MongoCompanyRepository from '../../repositories/implementations/MongoCompanyRepository';
import IsAuthenticatedUseCase from './IsAuthenticatedUseCase';
import IsAuthenticatedController from './IsAuthenticatedController';

const jwtTokenService = new JWTTokenService();
const mongoCompanyRepository = new MongoCompanyRepository();

const isAuthenticatedUseCase = new IsAuthenticatedUseCase(
  jwtTokenService,
  mongoCompanyRepository,
);

const isAuthenticatedController = new IsAuthenticatedController(
  isAuthenticatedUseCase
);

export default isAuthenticatedController;
