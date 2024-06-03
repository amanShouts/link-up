import { Router } from "express";
import { updateUserSkillsController } from "../controllers/skillController";

export const updateUserSkillsRoute = Router();

updateUserSkillsRoute.post("/skills", updateUserSkillsController);