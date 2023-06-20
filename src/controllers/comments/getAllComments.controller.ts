import { Request, Response } from "express";
import { getAllCommentsService } from "../../services/comments";

export const getAllCommentsController = async (
  _req: Request,
  res: Response
) => {
  const usersData = await getAllCommentsService();

  res.status(200).json(usersData);
};
