export interface IValidatorService {
  validateEmail(email: string): boolean;
  validatePhoneNumber(phoneBumber: string): boolean;
}
