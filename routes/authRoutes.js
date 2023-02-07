import { body } from 'express-validator';
import express from 'express';
import userController from '../controllers/userController.js';
import validationNewUser from '../middlewares/validationNewUser.js';
import checkLoginData from '../middlewares/checkLoginData.js';
import checkRegistrationData from '../middlewares/checkRegistrationData.js';
import checkRefreshToken from '../middlewares/checkRefreshToken.js';

const authRoutes = express.Router();

authRoutes.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  validationNewUser,
  checkRegistrationData,
  userController.registration,
);
authRoutes.post('/login', checkLoginData, userController.login);
authRoutes.post('/logout', userController.logout);
authRoutes.get('/refresh', checkRefreshToken, userController.refresh);

export default authRoutes;
