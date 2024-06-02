import { Router } from "express";
import {
  createPostController,
  getPostsController,
  likePostController,
  unlikePostController,
} from "../controllers/postController";

export const getAllPostRoute = Router();
export const likePostRoute = Router();
export const unlikePostRoute = Router();
export const createPostRoute = Router();

getAllPostRoute.get("/:userId", getPostsController);
likePostRoute.post("/like", likePostController);
unlikePostRoute.post("/unlike", unlikePostController);
createPostRoute.post("/create", createPostController);
