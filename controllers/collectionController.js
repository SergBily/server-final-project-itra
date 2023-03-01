import collectionService from '../services/collectionService.js';
import itemsService from '../services/itemService.js';

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

  async delete(request, response, next) {
    try {
      const { id } = request.params;
      const collections = await collectionService.deleteCollections(id);
      return response.json(collections);
    } catch (e) {
      next(e);
    }
  }

  async getCollection(request, response, next) {
    try {
      const { id } = request.params;
      const collection = await collectionService.getCollection(id);
      return response.json(collection);
    } catch (e) {
      next(e);
    }
  }

  async editCollection(request, response, next) {
    try {
      const { id } = request.params;
      const payload = request.body;
      const collection = await collectionService.editCollection(id, payload);
      return response.json(collection);
    } catch (e) {
      next(e);
    }
  }
}

const collectionController = new CollectionController();
export default collectionController;
