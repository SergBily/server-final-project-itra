class ItemDto {
  tags;

  title;

  customFields;

  id;

  visits;

  likes;

  constructor(model) {
    this.tags = model.tags;
    this.title = model.title;
    this.customFields = model.customFields;
    this.id = model._id;
    this.visits = model.visits;
    this.likes = model.likes;
  }
}

export default ItemDto;
