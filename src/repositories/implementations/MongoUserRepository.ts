import { IUserRepository } from '../IUserRepository';
import User from '../../entities/User';
import UserModel from '../models/UserModel';

export default class MongoUserRepository implements IUserRepository {
  async findById(userId: string): Promise<User> {
    const findedUser = await UserModel.findOne({ _id: userId });
    return findedUser ? new User(findedUser.toJSON()) : null;
  }
  async findByIdWithPassword(userId: string) {
    const findedUser = await UserModel.findOne({ _id: userId }).select(
      '+password'
    );
    return findedUser ? new User(findedUser.toJSON()) : null;
  }
  async findByCompanyEmailWithPassword(companyEmail: string): Promise<User> {
    const findedUser = await UserModel.findOne({ companyEmail }).select(
      '+password'
    );
    return findedUser ? new User(findedUser.toJSON()) : null;
  }

  async findByCompanyEmail(companyEmail: string): Promise<User> {
    const findedUser = await UserModel.findOne({ companyEmail });
    return findedUser ? new User(findedUser.toJSON()) : null;
  }

  async findBySubDomain(subDomain: string): Promise<User> {
    const findedUser = await UserModel.findOne({ subDomain });
    return findedUser ? new User(findedUser.toJSON()) : null;
  }

  async findByCNPJ(cnpj: string) {
    const findedUser = await UserModel.findOne({ CNPJ: cnpj });
    return findedUser ? new User(findedUser.toJSON()) : null;
  }

  async getAllUsers(): Promise<User[]> {
    const allUsers = await UserModel.find().sort({ companyName: 'asc' });

    return allUsers.map((document) => new User(document.toJSON()));
  }

  async save(category: any): Promise<any> {
    const newUser = await UserModel.create(category);
    return newUser.toJSON();
  }

  async defineUserHighlightscategory(
    userId: string,
    categoryId: string
  ): Promise<User> {
    const user: User = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          highlightsCategory: categoryId,
        },
      }
    );
    return user;
  }

  async update(userId: string, params: any): Promise<User> {
    const user: User = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: params }
    );
    return user;
  }

  async delete(userId) {
    await UserModel.findOneAndDelete({ _id: userId });
  }
}
