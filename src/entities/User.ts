export default class User {
  // TODO mudar _id para id
  public _id?: string;

  public name: string;

  public email: string;

  public active: boolean;

  public password: string;

  public house: string;

  public houseSize: string;
  
  public otherPets: boolean;
  
  public timeInHouse: string;
  
  public lastLogin?: Date = null;

  public admin = false;

  public registerCompleted = false;

  public numberAccess = 0;

  constructor(props: User) {
    const {
      name,
      email,
      password,
      _id,
    } = props;


    if (!name || name.length === 0) {
      throw new Error('User: user name is invalid.');
    }

    if (!email || email.length === 0) {
      throw new Error('User: email is invalid.');
    }

    if (!_id && (!password || password.length === 0)) {
      throw new Error('User: password is invalid.');
    }

    Object.assign(this, props);
  }
}
