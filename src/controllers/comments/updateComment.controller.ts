import { Request, Response } from "express";
import { updateCommentService } from "../../services/comments";

export const updateCommentController = async (req: Request, res: Response) => {
  const data = await updateCommentService(req.id, req.body);

  return res.json(data);
};
