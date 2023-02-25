import express from 'express';
import itemController from '../controllers/itemController.js';
import checkExistsItemTitle from '../middlewares/items/checkExistsItemTitle.js';
import checkExistsItem from '../middlewares/items/checkExistsItem.js';

const itemRoutes = express.Router();

itemRoutes.post('/create', checkExistsItemTitle, itemController.create);
itemRoutes.delete('/delete/:id', itemController.delete);

export default itemRoutes;
