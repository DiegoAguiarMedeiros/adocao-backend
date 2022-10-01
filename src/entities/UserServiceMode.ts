export default class UserServiceMode {
  public _id?: string;

  public userId: string;

  public serviceModeId: string;

  public active: boolean;

  constructor(props: UserServiceMode) {
    Object.assign(this, props);
  }
}
