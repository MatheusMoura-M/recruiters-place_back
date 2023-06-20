import { Request, Response } from "express";
import { getCommentByIdService } from "../../services/comments";

export const getCommentByIdController = async (req: Request, res: Response) => {
  const user = await getCommentByIdService(req.params.id);

  return res.status(200).json(user);
};
