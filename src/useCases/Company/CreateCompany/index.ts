import BCryptService from '../../../services/implementations/BCryptService';
import ValidatorService from '../../../services/implementations/ValidatorService';
import MongoCompanyRepository from '../../../repositories/implementations/MongoCompanyRepository';

import CreateCompanyUseCase from './CreateCompanyUseCase';
import CreateCompanyController from './CreateCompanyController';

const mongoCompanyRepository = new MongoCompanyRepository();

const bcryptService = new BCryptService();
const validatorService = new ValidatorService();

const createCompanyUseCase = new CreateCompanyUseCase(
  mongoCompanyRepository,
  bcryptService,
  validatorService,
);

const createCompanyController = new CreateCompanyController(createCompanyUseCase);

export default createCompanyController;
