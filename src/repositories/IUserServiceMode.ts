import UserServiceMode from '../entities/UserServiceMode';

export interface IUserServiceMode {
  save(user: UserServiceMode): Promise<any>;
  find(userId: string): Promise<any[]>;
  findById(id: string): Promise<any>;
  findByUser(userId: string): Promise<any>;
  update(userId: string, id: string, active: boolean): Promise<any>;
  findByServiceModeId(serviceMode: string, userId: string): Promise<any>;
  delete(userId: string): Promise<any>;
}
