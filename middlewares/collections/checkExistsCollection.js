import ApiError from '../../exceptions/apiError.js';
import CollectionModel from '../../models/collectionModel.js';

const checkExistsCollection = async (request, _response, next) => {
  const { title, topic } = request.body;
  const collection = await CollectionModel.findOne({ title, topic });
  if (collection) {
    next(ApiError.BadRequest('app.collection.response.error.title', ['title']));
  }
  next();
};

export default checkExistsCollection;
