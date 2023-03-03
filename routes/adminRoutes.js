import express from 'express';
import adminController from '../controllers/adminController.js';

const adminRoutes = express.Router();

adminRoutes.get('/users', adminController.getAllUsers);
adminRoutes.delete('/users/delete/:id', adminController.deleteUsers);
adminRoutes.patch('/users/status/:id', adminController.blockAndUnblockUsers);
adminRoutes.patch('/users/role/:id', adminController.changeRoleUsers);

export default adminRoutes;
