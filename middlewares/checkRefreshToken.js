import ApiError from '../exceptions/apiError.js';

const checkRefreshToken = async (request, _response, next) => {
  const { refreshToken } = request.cookies;
  if (!refreshToken) {
    return next(ApiError.UnauthorizedError());
  }
  next();
};

export default checkRefreshToken;
