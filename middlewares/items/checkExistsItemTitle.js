import ApiError from '../../exceptions/apiError.js';
import ItemModel from '../../models/itemModel.js';

const checkExistsItemTitle = async (request, _response, next) => {
  const { title, collectionId, userId } = request.body;
  const collection = await ItemModel.findOne({ title, collectionId, userId });
  if (collection) {
    next(ApiError.BadRequest('app.item.response.error.title', ['title']));
  }
  next();
};

export default checkExistsItemTitle;
