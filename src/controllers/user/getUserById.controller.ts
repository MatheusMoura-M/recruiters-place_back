import { Request, Response } from "express";
import { getUserByIdService } from "../../services/user";

export const getUserByIdController = async (req: Request, res: Response) => {
  const user = await getUserByIdService(req.params.id);

  return res.status(200).json(user);
};
