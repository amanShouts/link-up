import { getPosts, likePost, unlikePost } from "../model/post";
import { Request, Response } from "express";

export const getPostsController = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const posts = await getPosts(userId);
    return res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};

export const likePostController = async (req: Request, res: Response) => {
  const { postId, userId } = req.body;
  try {
    const post = await likePost({ postId, userId });
    return res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error liking post" });
  }
};

export const unlikePostController = async (req: Request, res: Response) => {
  const { postId, userId } = req.body;
  try {
    const post = await unlikePost({ postId, userId });
    return res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error unliking post" });
  }
};
