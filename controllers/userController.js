import userService from '../services/userService.js';
import setRefreshTokenCookie from '../utils/cookie.js';

class UserController {
  async registration(request, response, next) {
    try {
      const { name, email, password } = request.body;
      const userData = await userService.registration(name, email, password);
      setRefreshTokenCookie(response, userData.refreshToken);
      return response.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(request, response, next) {
    try {
      const { email } = request.body;
      const userData = await userService.login(email);
      setRefreshTokenCookie(response, userData.refreshToken);
      return response.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(request, response, next) {
    try {
      const { refreshToken } = request.cookies;
      const token = await userService.logout(refreshToken);
      response.clearCookie('refreshToken');
      return response.json(token);
    } catch (e) {
      next(e);
    }
  }

  async refresh(request, response, next) {
    try {
      const { refreshToken } = request.cookies;
      const userData = await userService.updateRefreshToken(refreshToken);
      setRefreshTokenCookie(response, userData.refreshToken);
      return response.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

const userController = new UserController();
export default userController;
