import MongoPetRepository from '../../../repositories/implementations/MongoPetRepository';

import CreatePetUseCase from './CreatePetUseCase';
import CreatePetController from './CreatePetController';

const mongoPetRepository = new MongoPetRepository();

const createPetUseCase = new CreatePetUseCase(
  mongoPetRepository
);

const createPetController = new CreatePetController(createPetUseCase);

export default createPetController;
