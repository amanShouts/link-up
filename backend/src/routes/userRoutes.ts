import { Router } from "express";
import {
  getUsers,
  saveUserController,
  userOnboarding,
} from "../controllers/userController";

export const getAllUsersRoute = Router();
export const saveUserRoute = Router();
export const onboardingRoute = Router();

getAllUsersRoute.get("/users", getUsers);
saveUserRoute.post("/save-user", saveUserController);
onboardingRoute.put("/", userOnboarding);
