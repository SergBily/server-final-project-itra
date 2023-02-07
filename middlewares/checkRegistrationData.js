import ApiError from '../exceptions/apiError.js';
import UserModel from '../models/userModel.js';

const checkRegistrationData = async (request, _response, next) => {
  const { email } = request.body;
  const candidate = await UserModel.findOne({ email });
  if (candidate) {
    next(ApiError.BadRequest(`User with email ${email} address exists`));
  }
  next();
};

export default checkRegistrationData;
