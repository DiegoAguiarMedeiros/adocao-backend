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
  async findByEmailWithPassword(email: string): Promise<User> {
    const findedUser = await UserModel.findOne({ email }).select(
      '+password'
      );
    return findedUser ? new User(findedUser.toJSON()) : null;
  }

  async findByEmail(email: string): Promise<User> {
    const findedUser = await UserModel.findOne({ email });
    return findedUser ? new User(findedUser.toJSON()) : null;
  }

  async getAllUsers(): Promise<User[]> {
    const allUsers = await UserModel.find();

    return allUsers.map((document) => new User(document.toJSON()));
  }

  async save(category: any): Promise<any> {
    const newUser = await UserModel.create(category);
    return newUser.toJSON();
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
