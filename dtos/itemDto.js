class ItemDto {
  tags;

  title;

  customFields;

  id;

  constructor(model) {
    this.tags = model.tags;
    this.title = model.title;
    this.customFields = model.customFields;
    this.id = model._id;
  }
}

export default ItemDto;
