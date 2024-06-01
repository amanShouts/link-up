import { Router } from "express";
import {
  getPostsController,
  likePostController,
  unlikePostController,
} from "../controllers/postController";

export const getAllPostRoute = Router();
export const likePostRoute = Router();
export const unlikePostRoute = Router();

getAllPostRoute.get("/:userId", getPostsController);
likePostRoute.post("/like", likePostController);
unlikePostRoute.post("/unlike", unlikePostController);
