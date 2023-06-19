import { Request, Response } from "express";
import { updateUserService } from "../../services/user";

export const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.id, req.body);

  return res.json(data);
};
