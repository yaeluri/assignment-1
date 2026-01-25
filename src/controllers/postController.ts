import { Post } from "../model/postModel";
import { Request, Response } from "express";
import BaseController from "./baseController";

class PostController extends BaseController {
  constructor() {
    super(Post);
  }

  async get(req: Request, res: Response) {
    const sender = req.query.sender as string | undefined;

    if (sender) {
      const posts = await Post.find({ senderId: sender }).sort({
        createdAt: -1,
      });
      res.status(200).json(posts);
      return;
    }

    await super.get(req, res);
  }
}

export default new PostController();
