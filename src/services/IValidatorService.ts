export interface IValidatorService {
  validateEmail(email: string): boolean;
  validatePhoneNumber(phoneBumber: string): boolean;
  validateSubDomain(subDomain: string): boolean;
  validateCNPJ(CNPJ: string): boolean;
  validateCEP(CEP: string): boolean;
}
