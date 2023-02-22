import ItemModel from '../models/itemModel.js';
import ItemDto from '../dtos/itemDto.js';

class ItemService {
  async getItemsCollection(collectionId) {
    return ItemModel.find({ collectionId });
  }

  async create(c) {
    const collection = await ItemModel.create(
      {
        userId: c.userId,
        collectionId: c.collectionId,
        tags: c.tags,
        title: c.title,
        customFields: {
          number: c.customFields.number,
          string: c.customFields.string,
          textarea: c.customFields.textarea,
          date: c.customFields.date,
          checkbox: c.customFields.checkbox,
        },
      },
    );
    return new ItemDto(collection);
  }
}

const itemsService = new ItemService();
export default itemsService;
