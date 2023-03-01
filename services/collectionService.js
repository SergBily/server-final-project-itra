import CollectionModel from '../models/collectionModel.js';
import CollectionDto from '../dtos/collectionDto.js';
import AllCollectionDto from '../dtos/allCollectionDto.js';
import { sortByDateDown } from '../utils/sortByDate.js';
import itemsService from './itemService.js';

class CollectionService {
  async create(c) {
    const collection = await CollectionModel.create(
      {
        userId: c.userId,
        imageUrl: c.image,
        topic: c.topic,
        title: c.title,
        description: c.description,
        customFields: {
          number: c.customFields.number,
          string: c.customFields.string,
          textarea: c.customFields.textarea,
          date: c.customFields.date,
          checkbox: c.customFields.checkbox,
        },
      },
    );
    return new CollectionDto(collection);
  }

  async getCollections(userId) {
    const collections = await CollectionModel.find({ userId });
    const sortedColletions = sortByDateDown(collections);
    return sortedColletions.map((c) => new AllCollectionDto(c));
  }

  async deleteCollections(_id) {
    itemsService.deleteAllItemsCollection(_id);
    return CollectionModel.deleteOne({ _id });
  }

  async getCollection(_id) {
    const collection = await CollectionModel.findById({ _id });
    return new CollectionDto(collection);
  }

  async editCollection(_id, payload) {
    const collection = await CollectionModel.findById({ _id });
    collection.topic = payload.topic;
    collection.title = payload.title;
    collection.description = payload.description;
    collection.imageUrl = payload.image;
    collection.customFields = payload.customFields;
    await collection.save();
  }
}

const collectionService = new CollectionService();
export default collectionService;
