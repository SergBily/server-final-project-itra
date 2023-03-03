import ApiError from '../../exceptions/apiError.js';
import UserModel from '../../models/userModel.js';

export async function checkStatusUser(request, _response, next) {
  try {
    const { email } = request.body;
    const user = await UserModel.findOne({ email });
    if (user.status === 'block') {
      return next(ApiError.Forbidden());
    }
    next();
  } catch (e) {
    return next(ApiError.NotFound('User is not registered!'));
  }
}

export default checkStatusUser;
