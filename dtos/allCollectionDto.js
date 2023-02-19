class AllCollectionDto {
  imageUrl;

  topic;

  title;

  description;

  customFields;

  id;

  constructor(model) {
    this.imageUrl = model.imageUrl;
    this.topic = model.topic;
    this.title = model.title;
    this.description = model.description;
    this.customFields = model.customFields;
    this.id = model._id;
  }
}

export default AllCollectionDto;
