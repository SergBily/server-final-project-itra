import ApiError from '../exceptions/apiError.js';

const erorrHandler = (error, _request, response, _next) => {
  if (error instanceof ApiError) {
    return response.status(error.status).json({ message: error.message, errors: error.errors });
  }
  return response.status(500).json({ message: 'Server error' });
};

export default erorrHandler;
