import { Request, Response } from "express";
import { createCommentService } from "../../services/comments";

export const createCommentController = async (req: Request, res: Response) => {
  const idTo = req.id;
  const idFrom = req.params.id;

  const userData = await createCommentService(idTo, idFrom, req.body);

  res.status(201).json(userData);
};
