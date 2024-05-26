import { Router } from "express";
import { getUsers, saveUserController } from "../controllers/userController";

export const getAllUsersRoute = Router();
export const saveUserRoute = Router();

getAllUsersRoute.get('/users',getUsers);
saveUserRoute.post('/save-user',saveUserController)
