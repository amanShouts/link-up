import { Router } from "express";
import { getPostsController } from "../controllers/postController";

export const getAllPostRoute = Router();

getAllPostRoute.get("/", getPostsController);
