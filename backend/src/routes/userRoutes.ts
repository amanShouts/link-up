import { Router } from 'express';
import {
  getSingleUserController,
  getUserProfile,
  getUsers,
  saveUserController,
  updateUserIndustriesController,
  updateUserSkillsController,
  userOnboarding,
} from '../controllers/userController';

export const getAllUsersRoute = Router();
export const saveUserRoute = Router();
export const onboardingRoute = Router();
export const getSingleUser = Router();
export const getUserDetailsByUsername = Router();
export const updateUserSkillsRoute = Router();
export const updateUserIndustriesRoute = Router();

getAllUsersRoute.get("/users", getUsers);
saveUserRoute.post("/save-user", saveUserController);
onboardingRoute.put("/edit-user", userOnboarding);
updateUserSkillsRoute.post("/skills", updateUserSkillsController);
updateUserIndustriesRoute.put("/industries", updateUserIndustriesController);
getSingleUser.get("/:id", getSingleUserController);
