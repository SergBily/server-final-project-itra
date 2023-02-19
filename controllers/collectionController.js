import collectionService from '../services/collectionService.js';

class CollectionController {
  async create(request, response, next) {
    try {
      const collection = request.body;
      const save = await collectionService.create(collection);
      return response.json(save);
    } catch (e) {
      next(e);
    }
  }

  async getAllCollection(request, response, next) {
    try {
      const { userId } = request.params;
      const collections = await collectionService.getCollections(userId);
      return response.json(collections);
    } catch (e) {
      next(e);
    }
  }
}

const collectionController = new CollectionController();
export default collectionController;
