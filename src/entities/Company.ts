enum Operations {
  PRESENTIAL = 0,
  DELIVERY = 1,
  TAKEAWAY = 2,
}

export default class Company {
  // TODO mudar _id para id
  public _id?: string;

  public name: string;

  public email: string;

  public tel: string;

  public active: boolean;

  public pets?: string;

  public password: string;

  constructor(props: Company) {
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

export { Operations };
