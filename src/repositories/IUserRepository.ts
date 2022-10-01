import User from "../entities/User";

export interface IUserRepository {
  findBySubDomain(subDomain: string): Promise<User>;
  findByCompanyEmailWithPassword(companyEmail: string): Promise<User>;
  findByCompanyEmail(companyEmail: string): Promise<User>;
  findById(userId: string): Promise<User>;
  findByIdWithPassword(userId: string): Promise<User>;
  findByCNPJ(cnpj: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  save(user: User): Promise<User>;
  update(userId: string, params: any): Promise<User>;
  defineUserHighlightscategory(
    userId: string,
    categoryId: string
  ): Promise<User>;
  delete(userId: string): Promise<void>;
}
