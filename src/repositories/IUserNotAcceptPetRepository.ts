import UserNotAcceptPet from "../entities/UserNotAcceptPet";

export interface IUserNotAcceptPetRepository {
  getAllUser(id: String): Promise<Array<String>>;
  save(UserNotAcceptPet: UserNotAcceptPet): Promise<UserNotAcceptPet>;
  delete(UserNotAcceptPetId: string): Promise<void>;
}
