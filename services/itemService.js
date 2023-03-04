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

  async updateVisits(_id) {
    const item = await ItemModel.findOne({ _id });
    item.visits += 1;
    await item.save();
  }

  async addLike(_id, userId) {
    const item = await ItemModel.findOne({ _id });
    item.likes.push(userId);
    await item.save();
    return new ItemDto(item);
  }

  async removeLike(_id, userId) {
    const item = await ItemModel.findOne({ _id });
    const indexRemoveLike = item.likes.indexOf(userId);
    item.likes.splice(indexRemoveLike, 1);
    await item.save();
    return new ItemDto(item);
  }

  async getLastItems() {
    const lastItems = await ItemModel.find().sort({ createdAt: -1 }).limit(10);
    return lastItems.map((i) => new ItemDto(i));
  }

  async getTags() {
    const allTags = await ItemModel.find({}, { tags: 1, _id: 0 });
    return allTags.map((t) => t.tags).flat().map((e) => ({ title: e }));
  }
}

const itemsService = new ItemService();
export default itemsService;
