enum Operations {
  PRESENTIAL = 0,
  DELIVERY = 1,
  TAKEAWAY = 2,
}

export default class Pet {
  // TODO mudar _id para id
  public _id?: string;

  public name: string;

  public breed: string;

  public description: string;

  public size: string;

  public sociable: boolean;

  public imgs?: string;

  public active: boolean;

  public company: string;

  constructor(props: Pet) {
    console.log('props',props)
    const {
      company,
      name,
      breed,
      description,
      size,
      active,
      sociable
    } = props;


    if (!company || company.length === 0) {
      throw new Error('Pet: pet company is invalid.');
    }
    if (!name || name.length === 0) {
      throw new Error('Pet: pet name is invalid.');
    }
    if (!breed || breed.length === 0) {
      throw new Error('Pet: pet breed is invalid.');
    }
    if (!description || description.length === 0) {
      throw new Error('Pet: pet description is invalid.');
    }
    console.log('size',size)
    console.log('teste', !size || size.length === 0 || (size !== 'small' && size !== 'medium' && size !== 'big'))
    if (!size || size.length === 0 || (size !== 'small' && size !== 'medium' && size !== 'big')) {
      throw new Error('Pet: pet size is invalid. must be (small, medium or big)');
    }


    Object.assign(this, props);
  }
}

export { Operations };
