import CollectionModel from '../models/collectionModel.js';
import CollectionDto from '../dtos/collectionDto.js';
import AllCollectionDto from '../dtos/allCollectionDto.js';

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
    return collections.map((c) => new AllCollectionDto(c));
  }
}

const collectionService = new CollectionService();
export default collectionService;
