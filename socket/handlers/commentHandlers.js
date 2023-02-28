import commentService from '../../services/commentService.js';

const commmentHandlers = (socket, io) => {
  socket.on('comment:new', async (payload) => {
    const createdComment = await commentService.create(payload);
    io.to(payload.itemId).emit('comment:created', createdComment);
  });

  socket.on('disconnect', () => {
    console.log(socket.id, 'close');
  });
};

export default commmentHandlers;
