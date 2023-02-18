import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { v4 as uuidv4 } from 'uuid';
import authRoutes from './routes/authRoutes.js';
import erorrHandler from './middlewares/errorHandler.js';
import collectionRoutes from './routes/collectionRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const server = createServer(app);

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.CLIENT_URL, process.env.DEPLOY_URL],
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  credentials: true,
  optionSuccessStatus: 200,
}));
app.use((_request, response, next) => {
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/', authRoutes);
app.use('/collection', collectionRoutes);
app.use(erorrHandler);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const io = new Server(server, {
  cors: [process.env.CLIENT_URL, process.env.DEPLOY_URL],
});

server.listen(PORT, () => console.log('port is work'));

io.use((socket, next) => {
  const { userName, sessionID, userID } = socket.handshake.auth;
  if (!userName) {
    return next(new Error('invalid username'));
  }
  if (sessionID) {
    socket.sessionID = sessionID;
    socket.userID = userID;
    socket.userName = userName;
    next();
  }
  socket.sessionID = uuidv4();
  socket.userID = uuidv4();
  socket.userName = userName;
  next();
});

io.on('connection', (socket) => {
  socket.join(socket.userName);
});
