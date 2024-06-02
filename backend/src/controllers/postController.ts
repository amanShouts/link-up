import { createPost, getPosts, likePost, unlikePost } from "../model/post";
import { Request, Response } from "express";
import { imageUploader } from "../utiles/uploadImage";

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

export const createPostController = async (req: Request, res: Response) => {
  const { title, desc, userId, imageLink, videoLink, resourceLink } = req.body;
  try {
    // upload Image
    if (imageLink) {
      const image_url = await imageUploader({
        fileStr: imageLink,
        user_id: userId,
      });
      // Create post
      await createPost({
        userId,
        title,
        desc,
        imageLink: image_url,
      });
    }

    return res.json({ message: "Post created" });
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
};
