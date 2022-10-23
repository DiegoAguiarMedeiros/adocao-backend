import MongoCompanyRepository from '../../../repositories/implementations/MongoCompanyRepository';

import BCryptService from '../../../services/implementations/BCryptService';
import ValidatorService from '../../../services/implementations/ValidatorService';

import UpdateCompanyUseCase from './UpdateCompanyUseCase';
import UpdateCompanyController from './UpdateCompanyController';

const mongoCompanyRepository = new MongoCompanyRepository();

const bcryptService = new BCryptService();
const validatorService = new ValidatorService();

const updateCompanyUseCase = new UpdateCompanyUseCase(
  mongoCompanyRepository,
  validatorService,
  bcryptService,
);

const updateCompanyController = new UpdateCompanyController(updateCompanyUseCase);

export default updateCompanyController;
