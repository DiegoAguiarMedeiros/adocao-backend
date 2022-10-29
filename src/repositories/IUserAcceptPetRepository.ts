import UserAcceptPet from "../entities/UserAcceptPet";

export interface IUserAcceptPetRepository {
  getAllUser(id: String): Promise<Array<String>>;
  save(UserAcceptPet: UserAcceptPet): Promise<UserAcceptPet>;
  delete(UserAcceptPetId: string): Promise<void>;
}
