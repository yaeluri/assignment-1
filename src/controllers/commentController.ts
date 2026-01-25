import { Request, Response } from "express";
import mongoose from "mongoose";
import Comment from "../models/commentModel";
import BaseController from "./baseController";

class CommentController extends BaseController {
  constructor() {
    super(Comment);
  }

  async get(req: Request, res: Response) {
    const postId = req.query.postId as string | undefined;

    if (postId) {
      if (!mongoose.Types.ObjectId.isValid(postId)) {
        res.status(400).json({ message: "Invalid postId" });
        return;
      }

      const comments = await Comment.find({ postId }).sort({ createdAt: -1 });

      res.status(200).json(comments);
      return;
    }

    await super.get(req, res);
  }
}

export default new CommentController();
