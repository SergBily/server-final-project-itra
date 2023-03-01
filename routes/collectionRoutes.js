import express from 'express';
import collectionController from '../controllers/collectionController.js';
import checkExistsCollection from '../middlewares/collections/checkExistsCollection.js';

const collectionRoutes = express.Router();

collectionRoutes.post('/create', checkExistsCollection, collectionController.create);
collectionRoutes.get('/all/:userId', collectionController.getAllCollection);
collectionRoutes.delete('/delete/:id', collectionController.delete);
collectionRoutes.get('/:id', collectionController.getCollection);
collectionRoutes.put('/edit/:id', collectionController.editCollection);

export default collectionRoutes;
