import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import {
  createCommentController,
  deleteCommentController,
  getAllCommentsController,
  getCommentByIdController,
  updateCommentController,
} from "../controllers/comments";
import { commentRequestSchema } from "../schemas/comments";

const commentsRoutes = Router();

commentsRoutes.post(
  "/:id",
  validateTokenMiddleware,
  bodyValidator(commentRequestSchema),
  createCommentController
);

commentsRoutes.get("/", getAllCommentsController);

commentsRoutes.patch(
  "",
  validateTokenMiddleware,
  bodyValidator(commentRequestSchema),
  updateCommentController
);

commentsRoutes.delete("", validateTokenMiddleware, deleteCommentController);

commentsRoutes.get("/:id", getCommentByIdController);

export default commentsRoutes;
