import { ICompanyRepository } from '../ICompanyRepository';
import Company from '../../entities/Company';
import CompanyModel from '../models/CompanyModel';

export default class MongoCompanyRepository implements ICompanyRepository {
  async findById(companyId: string): Promise<Company> {
    const findedCompany = await CompanyModel.findOne({ _id: companyId });
    return findedCompany ? new Company(findedCompany.toJSON()) : null;
  }
  async findByIdWithPassword(companyId: string) {
    const findedCompany = await CompanyModel.findOne({ _id: companyId }).select(
      '+password'
    );
    return findedCompany ? new Company(findedCompany.toJSON()) : null;
  }
  async findByEmailWithPassword(email: string): Promise<Company> {
    const findedCompany = await CompanyModel.findOne({ email }).select(
      '+password'
      );
    return findedCompany ? new Company(findedCompany.toJSON()) : null;
  }

  async findByEmail(email: string): Promise<Company> {
    const findedCompany = await CompanyModel.findOne({ email });
    return findedCompany ? new Company(findedCompany.toJSON()) : null;
  }

  async getAllCompanys(): Promise<Company[]> {
    const allCompanys = await CompanyModel.find();

    return allCompanys.map((document) => new Company(document.toJSON()));
  }

  async save(company: any): Promise<any> {
    const newCompany = await CompanyModel.create(company);
    return newCompany.toJSON();
  }

  async update(CompanyId: string, params: any): Promise<Company> {
    const Company: Company = await CompanyModel.findOneAndUpdate(
      { _id: CompanyId },
      { $set: params }
    );
    return Company;
  }

  async delete(CompanyId) {
    await CompanyModel.findOneAndDelete({ _id: CompanyId });
  }
}
