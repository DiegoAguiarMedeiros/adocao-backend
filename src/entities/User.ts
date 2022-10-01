enum Operations {
  PRESENTIAL = 0,
  DELIVERY = 1,
  TAKEAWAY = 2,
}

export default class User {
  // TODO mudar _id para id
  public _id?: string;

  public userFirstName: string;

  public userLastName?: string = '';

  public userEmail: string;

  public userPhone: string;

  public subDomain: string;

  public fantasyName?: string;

  public companyEmail: string;

  public companyName: string;

  public stateRegister?: string = '';

  public CNPJ?: string = '';

  public CEP?: string = '';

  public state?: string = '';

  public city?: string = '';

  public street?: string = '';

  public addressNumber?: string = '';

  public addressComplement?: string = '';

  public operation?;

  public active: boolean;

  public password: string;

  public logoUrl?: string;

  public highlightsCategory?: string;

  public lastLogin?: Date = null;

  public facebookPixel?: string;

  public admin = false;

  public numberAccess = 0;

  constructor(props: User) {
    const {
      userFirstName,
      userEmail,
      userPhone,
      subDomain,
      companyName,
      companyEmail,
      password,
      _id,
    } = props;

    if (!userFirstName || userFirstName.length === 0) {
      throw new Error('User: user first name is invalid.');
    }

    if (!userEmail || userEmail.length === 0) {
      throw new Error('User: email is invalid.');
    }

    if (!userPhone || userPhone.length === 0) {
      throw new Error('User: user phone is invalid.');
    }

    if (!_id && (!password || password.length === 0)) {
      throw new Error('User: password is invalid.');
    }

    if (!subDomain || subDomain.length === 0) {
      throw new Error('User: subDomain is invalid.');
    }

    if (!companyName || companyName.length === 0) {
      throw new Error('User: company name is invalid.');
    }

    if (!companyEmail || companyEmail.length === 0) {
      throw new Error('User: company email is invalid.');
    }

    Object.assign(this, props);
  }
}

export { Operations };
