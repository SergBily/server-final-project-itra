import ApiError from '../../exceptions/apiError.js';
import ItemModel from '../../models/itemModel.js';

const checkExistsItem = async (request, _response, next) => {
  const { id } = request.params;
  const item = await ItemModel.findOne({ _id: id });
  if (!item) {
    next(ApiError.BadRequest('', ['notFound']));
  }
  next();
};

export default checkExistsItem;
