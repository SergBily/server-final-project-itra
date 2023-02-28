class ItemDto {
  tags;

  title;

  customFields;

  id;

  visits;

  constructor(model) {
    this.tags = model.tags;
    this.title = model.title;
    this.customFields = model.customFields;
    this.id = model._id;
    this.visits = model.visits;
  }
}

export default ItemDto;
