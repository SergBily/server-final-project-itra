class CommentDto {
  text;

  sender;

  constructor(model) {
    this.text = model.text;
    this.sender = model.sender;
  }
}

export default CommentDto;
