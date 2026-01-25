import express from "express";
const router = express.Router();

import commentController from "../controllers/commentController";

router.get("/", commentController.get.bind(commentController)); 
router.get("/:id", commentController.getById.bind(commentController));
router.post("/", commentController.post.bind(commentController));
router.put("/:id", commentController.put.bind(commentController));
router.delete("/:id", commentController.delete.bind(commentController));

export default router;
