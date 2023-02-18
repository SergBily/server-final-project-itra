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
}

const collectionController = new CollectionController();
export default collectionController;
