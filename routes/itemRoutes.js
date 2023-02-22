import express from 'express';
import itemController from '../controllers/itemController.js';
import checkExistsItem from '../middlewares/items/checkExistsItem.js';

const itemRoutes = express.Router();

itemRoutes.post('/create', checkExistsItem, itemController.create);

export default itemRoutes;
