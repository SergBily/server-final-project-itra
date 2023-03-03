import itemsService from '../services/itemService.js';

class ItemController {
  async create(request, response, next) {
    try {
      const item = request.body;
      const save = await itemsService.create(item);
      return response.json(save);
    } catch (e) {
      next(e);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;
      const deleted = await itemsService.deleteItem(id);
      return response.json(deleted);
    } catch (e) {
      next(e);
    }
  }

  async getItem(request, response, next) {
    try {
      const { id } = request.params;
      const item = await itemsService.getItem(id);
      return response.json(item);
    } catch (e) {
      next(e);
    }
  }

  updateItem(request, response, next) {
    try {
      const { id } = request.params;
      const item = request.body;
      itemsService.updateItem(id, item);
      return response.send('item updated');
    } catch (e) {
      next(e);
    }
  }

  async getItemsCollection(request, response, next) {
    try {
      const { collectionId } = request.params;
      const items = await itemsService.getItemsCollection(collectionId);
      return response.json(items);
    } catch (e) {
      next(e);
    }
  }

  updateVisits(request, response, next) {
    try {
      const { id } = request.params;
      itemsService.updateVisits(id);
      return response.send('updated');
    } catch (e) {
      next(e);
    }
  }

  async addLike(request, response, next) {
    try {
      const { id } = request.params;
      const { userId } = request.body;
      const item = await itemsService.addLike(id, userId);
      return response.json(item);
    } catch (e) {
      next(e);
    }
  }

  async removeLike(request, response, next) {
    try {
      const { id } = request.params;
      const { userId } = request.body;
      const item = await itemsService.removeLike(id, userId);
      return response.json(item);
    } catch (e) {
      next(e);
    }
  }

  async getLastItems(_request, response, next) {
    try {
      const lastItems = await itemsService.getLastItems();
      return response.json(lastItems);
    } catch (e) {
      next(e);
    }
  }
}

const itemController = new ItemController();
export default itemController;
