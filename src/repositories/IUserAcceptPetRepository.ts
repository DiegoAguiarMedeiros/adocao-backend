import UserAcceptPet from "../entities/UserAcceptPet";
import Pet from "../entities/Pet";

export interface IUserAcceptPetRepository {
  getAllUser(id: String): Promise<Array<String>>;
  getAllPetsByUser(id: String): Promise<Array<Pet>>;
  save(UserAcceptPet: UserAcceptPet): Promise<UserAcceptPet>;
  delete(UserAcceptPetId: string): Promise<void>;
}
