class ItemDto {
  tags;

  title;

  customFields;

  id;

  visits;

  likes;

  collectionId;

  constructor(model) {
    this.tags = model.tags;
    this.title = model.title;
    this.customFields = model.customFields;
    this.id = model._id;
    this.visits = model.visits;
    this.likes = model.likes;
    this.collectionId = model.collectionId;
  }
}

export default ItemDto;
