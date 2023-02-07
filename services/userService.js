import UserModel from '../models/userModel.js';
import { getHashPassword } from '../utils/hash.js';
import getTokens from '../utils/token.js';
import UserDto from '../dtos/userDto.js';
import tokenService from './tokenService.js';
import ApiError from '../exceptions/apiError.js';

class UserService {
  async registration(name, email, password) {
    const createdUser = await this.createUser({ name, email, password });
    const userDto = new UserDto(createdUser);
    return {
      ...getTokens(userDto),
      user: userDto,
    };
  }

  async createUser(newUser) {
    const passwordHash = await getHashPassword(newUser.password);
    const user = await UserModel.create(
      {
        name: newUser.name,
        email: newUser.email,
        password: passwordHash,
      },
    );
    return user;
  }

  async login(email) {
    const user = await UserModel.findOne({ email });
    const userDto = new UserDto(user);
    return {
      ...getTokens(userDto),
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async updateRefreshToken(refreshToken) {
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    return {
      ...getTokens(userDto),
      user: userDto,
    };
  }
}

const userService = new UserService();
export default userService;
