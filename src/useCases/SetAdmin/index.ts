import SetAdminUseCase from "./SetAdminUseCase";
import SetAdminController from "./SetAdminController";
import MongoUserRepository from "../../repositories/implementations/MongoUserRepository";

const mongoUserRepository = new MongoUserRepository();

const setAdminUseCase = new SetAdminUseCase(mongoUserRepository);

const setAdminController = new SetAdminController(setAdminUseCase);

export default setAdminController;
