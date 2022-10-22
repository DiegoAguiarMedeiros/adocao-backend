import Company from "../entities/Company";

export interface ICompanyRepository {
  findByEmailWithPassword(Email: string): Promise<Company>;
  findByEmail(Email: string): Promise<Company>;
  findById(companyId: string): Promise<Company>;
  findByIdWithPassword(CompanyId: string): Promise<Company>;
  getAllCompanys(): Promise<Company[]>;
  save(company: Company): Promise<Company>;
  update(companyId: string, params: any): Promise<Company>;
  delete(companyId: string): Promise<void>;
}
