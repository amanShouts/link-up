import { Router } from 'express';
import {
  countViewPostController,
  createCommentController,
  createLinkPostController,
  createPostController,
  getPostsController,
  likePostController,
  unlikePostController,
} from '../controllers/postController';

export const getAllPostRoute = Router();
export const likePostRoute = Router();
export const unlikePostRoute = Router();
export const createPostRoute = Router();
export const countViewRoute = Router();
export const createCommentRoute = Router();

getAllPostRoute.get('/:userId', getPostsController);
likePostRoute.post('/like', likePostController);
unlikePostRoute.post('/unlike', unlikePostController);
createPostRoute.post('/create', createPostController);
createPostRoute.post('/create/link', createLinkPostController);
countViewRoute.post('/view', countViewPostController);
createCommentRoute.post('/create', createCommentController);
