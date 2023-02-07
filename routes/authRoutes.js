import { body } from 'express-validator';
import express from 'express';
import userController from '../controllers/userController.js';
import validationNewUser from '../middlewares/validationNewUser.js';
import checkLoginData from '../middlewares/checkLoginData.js';

const authRoutes = express.Router();

authRoutes.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  validationNewUser,
  userController.registration,
);
authRoutes.post('/login', checkLoginData, userController.login);
authRoutes.post('/logout');
authRoutes.get('/refresh');

export default authRoutes;
