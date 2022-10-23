import dayjs from 'dayjs';
import { ITokenService } from '../../services/ITokenService';
import { IUserRepository } from '../../repositories/IUserRepository';
export default class IsAuthenticatedUseCase {
  constructor(
    private tokenService: ITokenService,
    private userRepository: IUserRepository,
  ) {}

  execute = async (token: string) => {
    const { userId } = this.tokenService.verify(token);
    const user: any = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error('User does not exists.');
    }

    return {
      userId,
      user,
    };
  };
}
