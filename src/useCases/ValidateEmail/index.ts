import MongoUserRepository from '../../repositories/implementations/MongoUserRepository';
import ValidatorService from '../../services/implementations/ValidatorService';
import ValidateEmailUseCase from './ValidateCompanyEmailUseCase';
import ValidateEmailController from './ValidateCompanyEmailController';

const mongoUserRepository = new MongoUserRepository();
const validatorService = new ValidatorService();

const validateEmailUseCase = new ValidateEmailUseCase(mongoUserRepository, validatorService);

const validateEmailController = new ValidateEmailController(validateEmailUseCase);

export default validateEmailController;
