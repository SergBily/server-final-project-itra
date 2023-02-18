import express from 'express';
import collectionController from '../controllers/collectionController.js';
import checkExistsCollection from '../middlewares/collections/checkExistsCollection.js';

const collectionRoutes = express.Router();

collectionRoutes.post('/create', checkExistsCollection, collectionController.create);

export default collectionRoutes;
