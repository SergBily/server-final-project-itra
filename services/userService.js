import UserModel from '../models/userModel.js';
import ApiError from '../exceptions/apiError.js';
import { getHashPassword } from '../utils/hash.js';
import getTokens from '../utils/token.js';
import UserDto from '../dtos/userDto.js';

class UserService {
  async registration(name, email, password) {
    await this.findUser(email);
    const createdUser = await this.createUser({ name, email, password });
    const userDto = new UserDto(createdUser);
    return {
      ...getTokens(userDto),
      user: userDto,
    };
  }

  async findUser(email) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`User with email ${email} address exists`);
    }
    return candidate;
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
}

const userService = new UserService();
export default userService;
