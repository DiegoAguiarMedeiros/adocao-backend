enum Operations {
  PRESENTIAL = 0,
  DELIVERY = 1,
  TAKEAWAY = 2,
}

export default class User {
  // TODO mudar _id para id
  public _id?: string;

  public name: string;

  public email: string;

  public active: boolean;

  public password: string;

  public house: number;

  public houseSize: number;
  
  public otherPets: boolean;
  
  public timeInHouse: number;
  
  public lastLogin?: Date = null;

  public admin = false;

  public numberAccess = 0;

  constructor(props: User) {
    const {
      name,
      email,
      password,
      _id,
    } = props;

    console.log('3',name)


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

export { Operations };
