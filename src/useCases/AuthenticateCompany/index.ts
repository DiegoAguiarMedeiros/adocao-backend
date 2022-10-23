import MongoCompanyRepository from '../../repositories/implementations/MongoCompanyRepository';

import BCryptService from '../../services/implementations/BCryptService';
import JWTTokenService from '../../services/implementations/JWTTokenService';
import AuthenticationUseCase from './AuthenticateUseCase';
import AuthenticationController from './AuthenticateController';

const mongoCompanyRepository = new MongoCompanyRepository();
const bCryptService = new BCryptService();
const jwtTokenService = new JWTTokenService();

const authenticationUseCase = new AuthenticationUseCase(
  mongoCompanyRepository,
  bCryptService,
  jwtTokenService,
);

const authenticationController = new AuthenticationController(
  authenticationUseCase
);

export default authenticationController;
