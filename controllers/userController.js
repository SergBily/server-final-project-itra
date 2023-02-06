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
}

const userController = new UserController();
export default userController;
