import { Router } from 'express';
import {
  getSingleUserController,
  getUserIdController,
  getUserProfile,
  getUsers,
  saveUserController,
  userOnboarding,
} from '../controllers/userController';

export const getAllUsersRoute = Router();
export const saveUserRoute = Router();
export const onboardingRoute = Router();
export const getSingleUser = Router();
export const getUserDetailsByUsername = Router();
export const updateUserIndustriesRoute = Router();
export const getUserId = Router();

getAllUsersRoute.get('/users', getUsers);
saveUserRoute.post('/save-user', saveUserController);
onboardingRoute.put('/edit-user', userOnboarding);
getSingleUser.get('/:id', getSingleUserController);
getUserId.get('/', getUserIdController);
