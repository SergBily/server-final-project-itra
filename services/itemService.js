import ItemModel from '../models/itemModel.js';
import ItemDto from '../dtos/itemDto.js';
import { sortByDateDown } from '../utils/sortByDate.js';

class ItemService {
  async getItemsCollection(collectionId) {
    const items = await ItemModel.find({ collectionId });
    const sortedItems = sortByDateDown(items);
    return sortedItems.map((c) => new ItemDto(c));
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

  async deleteAllItemsCollection(collectionId) {
    await ItemModel.deleteMany({ collectionId });
  }

  deleteItem(_id) {
    return ItemModel.deleteOne({ _id });
  }

  async getItem(_id) {
    const item = await ItemModel.findOne({ _id });
    return new ItemDto(item);
  }

  async updateItem(_id, payload) {
    const item = await ItemModel.findOne({ _id });
    item.title = payload.title;
    item.tags = payload.tags;
    item.customFields = payload.customFields;
    await item.save();
  }
}

const itemsService = new ItemService();
export default itemsService;
