import { getPosts } from "../model/post";
import { Request, Response } from "express";

export const getPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await getPosts();
    return res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};
