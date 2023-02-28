import express from 'express';
import itemController from '../controllers/itemController.js';
import checkExistsItemTitle from '../middlewares/items/checkExistsItemTitle.js';
import checkExistsItem from '../middlewares/items/checkExistsItem.js';

const itemRoutes = express.Router();

itemRoutes.post('/create', checkExistsItemTitle, itemController.create);
itemRoutes.delete('/delete/:id', itemController.delete);
itemRoutes.get('/:id', checkExistsItem, itemController.getItem);
itemRoutes.put('/edit/:id', checkExistsItem, itemController.updateItem);
itemRoutes.get('/all/:collectionId', itemController.getItemsCollection);
itemRoutes.patch('/:id', itemController.updateVisits);

export default itemRoutes;
