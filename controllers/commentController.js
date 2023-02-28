import commentService from '../services/commentService.js';

class CommentController {
  async create(request, response, next) {
    try {
      const item = request.body;
      const save = await commentService.create(item);
      return response.json(save);
    } catch (e) {
      next(e);
    }
  }

  async getAllComment(request, response, next) {
    try {
      const { itemId } = request.params;
      const comments = await commentService.getAllComments(itemId);
      return response.json(comments);
    } catch (e) {
      next(e);
    }
  }
}

const commentController = new CommentController();
export default commentController;
