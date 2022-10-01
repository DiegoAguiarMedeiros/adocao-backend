import { unMask, mask } from "remask";

import { IUserRepository } from "../../repositories/IUserRepository";

export default class SetAdminUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute = async (cnpj: string, password: string): Promise<any> => {
    if (password !== "ab44e8f4-d42a-11eb-b8bc-0242ac130003") {
      throw new Error("Password invalid.");
    }

    let selectedUser = await this.userRepository.findByCNPJ(cnpj);
    if (!selectedUser) {
      selectedUser = await this.userRepository.findByCNPJ(unMask(cnpj));

      if (!selectedUser) {
        selectedUser = await this.userRepository.findByCNPJ(
          mask(cnpj, ["99.999.999/9999-99"])
        );
        if (!selectedUser) throw new Error("invalid CNPJ.");
      }
    }

    const updatedUser = { ...selectedUser };
    updatedUser.admin = true;

    await this.userRepository.update(updatedUser._id, { ...updatedUser });
  };
}
