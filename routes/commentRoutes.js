import express from 'express';
import commentController from '../controllers/commentController.js';

const commentRoutes = express.Router();

commentRoutes.get('/all/:itemId', commentController.getAllComment);

export default commentRoutes;
