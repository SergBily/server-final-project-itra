import CommentModel from '../models/commentModel.js';
import CommentDto from '../dtos/commentDto.js';
import { sortByDateUp } from '../utils/sortByDate.js';

class CommentService {
  async create(c) {
    const comment = await CommentModel.create(
      {
        userId: c.userId,
        collectionId: c.collectionId,
        itemId: c.itemId,
        text: c.text,
        sender: c.sender,
      },
    );
    return new CommentDto(comment);
  }

  async getAllComments(itemId) {
    const comments = await CommentModel.find({ itemId });
    const sortedComments = sortByDateUp(comments);
    return sortedComments.map((c) => new CommentDto(c));
  }
}

const commentService = new CommentService();
export default commentService;
