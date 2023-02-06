import { validationResult } from 'express-validator';
import ApiError from '../exceptions/apiError.js';

const validationNewUser = (request, _response, next) => {
  const validationErrors = validationResult(request);
  if (!validationErrors.isEmpty()) {
    return next(ApiError.BadRequest(' Validation errors', validationErrors.array()));
  }
  next();
};

export default validationNewUser;
