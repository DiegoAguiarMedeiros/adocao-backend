import { cnpj } from 'cpf-cnpj-validator';
import { IValidatorService } from '../IValidatorService';
// eslint-disable-next-line
const emailRegex = /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneNumberRegex = /^\d{11}$/;

export default class ValidatorService implements IValidatorService {
  validateEmail(email: string): boolean {
    if (email) {
      return emailRegex.test(email);
    }

    return false;
  }

  validatePhoneNumber(phoneBumber: string): boolean {
    if (phoneBumber) {
      return phoneNumberRegex.test(phoneBumber);
    }

    return false;
  }

}
