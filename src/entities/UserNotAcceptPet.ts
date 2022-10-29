export default class UserNotAcceptPet {
  // TODO mudar _id para id
  public _id?: string;

  public user: string;

  public pet: string;

  constructor(props: UserNotAcceptPet) {
    const {
      user,
      pet
    } = props;


    if (!user || user.length === 0) {
      throw new Error('User: user user is invalid.');
    }

    if (!pet || pet.length === 0) {
      throw new Error('User: pet is invalid.');
    }


    Object.assign(this, props);
  }
}
