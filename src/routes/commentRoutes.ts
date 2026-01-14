import express, { Request, Response } from "express";
import commentSchema from "../models/commentModel";

const commentRouter = express.Router();

commentRouter.post("/", async (req: Request, res: Response) => {
  const comment = new commentSchema({
    postId: req.body.postId,
    content: req.body.content,
    sender: req.body.sender,
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

commentRouter.get("/", async (req: Request, res: Response) => {
  try {
    const comments = await commentSchema.find();
    res.json(comments);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

commentRouter.get("/post/:id", async (req: Request, res: Response) => {
  try {
    const comments = await commentSchema.find({ postId: req.params.id });
    res.json(comments);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

commentRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const updatedComment = await commentSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedComment);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

commentRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    await commentSchema.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default commentRouter;
