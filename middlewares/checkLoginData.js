import ApiError from '../exceptions/apiError.js';
import UserModel from '../models/userModel.js';
import { comparePassword } from '../utils/hash.js';

const checkLoginData = async (request, _response, next) => {
  const { email, password } = request.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return next(ApiError.NotFound(`User with ${email} email is not registered!`));
  }
  const isPasswordEquals = await comparePassword(password, user.password);
  if (!isPasswordEquals) {
    return next(ApiError.BadRequest('Wrong password'));
  }
  next();
};

export default checkLoginData;
