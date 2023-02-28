import commentHandlers from './handlers/commentHandlers.js';

const onConnection = (socket, io) => {
  commentHandlers(socket, io);
};

export default onConnection;
