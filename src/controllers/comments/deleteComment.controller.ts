import { Request, Response } from "express";
import { deleteCommentService } from "../../services/comments";

export const deleteCommentController = async (req: Request, res: Response) => {
  await deleteCommentService(req.id);

  return res.status(204).json();
};
