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
}

const itemController = new ItemController();
export default itemController;
