import ItemModel from '../models/itemModel.js';
import ItemDto from '../dtos/itemDto.js';
import sortByDate from '../utils/sortByDate.js';

class ItemService {
  async getItemsCollection(collectionId) {
    const items = await ItemModel.find({ collectionId });
    const sortedItems = sortByDate(items);
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

  async deleteItem(_id) {
    return ItemModel.deleteOne({ _id });
  }
}

const itemsService = new ItemService();
export default itemsService;
