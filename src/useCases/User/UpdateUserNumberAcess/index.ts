import MongoUserRepository from '../../../repositories/implementations/MongoUserRepository';

import UpdateUserNumberAcessUseCase from './UpdateUserNumberAcessUseCase';
import UpdateUserNumberAcessController from './UpdateUserNumberAcessController';

const mongoUserRepository = new MongoUserRepository();

const updateUserNumberAcessUseCase = new UpdateUserNumberAcessUseCase(
  mongoUserRepository
);

const updateUserNumberAcessController = new UpdateUserNumberAcessController(
  updateUserNumberAcessUseCase
);

export default updateUserNumberAcessController;
