class CollectionDto {
  imageUrl;

  topic;

  title;

  description;

  constructor(model) {
    this.imageUrl = model.imageUrl;
    this.topic = model.topic;
    this.title = model.title;
    this.description = model.description;
  }
}

export default CollectionDto;
