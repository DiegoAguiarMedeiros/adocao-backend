import { IUserServiceMode } from '../IUserServiceMode';
import UserServiceMode from '../../entities/UserServiceMode';
import UserServiceModeModel from '../models/UserServiceModeModel';

export default class MongoUserServiceModeRepository
  implements IUserServiceMode
{
  async find(userId: string) {
    const findedServiceMode = await UserServiceModeModel.find({ userId });
    return findedServiceMode
      ? findedServiceMode.map(
          (document) => new UserServiceMode(document.toJSON())
        )
      : null;
  }

  async findById(id: string) {
    const findedServiceMode = await UserServiceModeModel.findOne({
      _id: id,
    }).populate('serviceModeId');

    return findedServiceMode ? findedServiceMode.toJSON() : null;
  }

  async findByUser(userId: string) {
    const findedByUser = await UserServiceModeModel.find({
      userId,
    })
      .select('serviceModeId active')
      .populate('serviceModeId');

    const formattedServices = findedByUser.map((el: any) => ({
      operationName: el.serviceModeId.name,
      id: el.serviceModeId.id_,
      _id: el._id,
      active: el.active,
    }));

    return formattedServices;
  }

  async save(userService: any) {
    const addServiceModeForUser = await UserServiceModeModel.create(
      userService
    );
    return addServiceModeForUser;
  }

  async update(userId: string, id: string, params: any) {
    const updated = await UserServiceModeModel.findOneAndUpdate(
      { _id: id, userId },
      {
        active: params,
      }
    );
    return updated;
  }

  async findByServiceModeId(serviceMode: string, userId: string) {
    const finded = await UserServiceModeModel.findOne({
      serviceModeId: serviceMode,
    });
    return finded ? finded.toJSON() : null;
  }

  async delete(userId: string) {
    await UserServiceModeModel.deleteMany({ userId });
  }
}
