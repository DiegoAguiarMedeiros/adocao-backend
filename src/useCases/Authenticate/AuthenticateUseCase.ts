import { IUserRepository } from '../../repositories/IUserRepository';
import { IUserServiceMode } from '../../repositories/IUserServiceMode';

import { ICryptService } from '../../services/ICryptService';
import { ITokenService } from '../../services/ITokenService';

export default class AuthenticateUseCase {
  constructor(
    private userRepository: IUserRepository,
    private cryptService: ICryptService,
    private tokenService: ITokenService,
    private userServiceModeRepository: IUserServiceMode,
  ) {}

  execute = async (email: string, password: string) => {
    const user = await this.userRepository.findByCompanyEmailWithPassword(
      email
    );

    if (!user) {
      throw new Error('AuthenticateUseCase: user not found.');
    }

    const passwordVerification = await this.cryptService.compare(
      password,
      user.password
    );

    if (!passwordVerification) {
      throw new Error('AuthenticateUseCase: invalid password.');
    }

    if (!user.active) {
      throw new Error('AuthenticateUseCase: user inactive.');
    }

    user.password = undefined;

    const isFirstLogin = !user.lastLogin;

    if (isFirstLogin) {
      await this.userRepository.update(user._id, { lastLogin: Date.now() });
    }

    const operation = await this.userServiceModeRepository.findByUser(user._id);

    const userWithIsFirstLogin = {
      ...user,
      isFirstLogin,
      operation,
    };

    const token = this.tokenService.sign({ userId: user._id });

    return { user: userWithIsFirstLogin, token };
  };
}
