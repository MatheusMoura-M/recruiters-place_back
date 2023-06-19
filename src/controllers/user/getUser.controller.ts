import { Request, Response } from "express";
import { getUserService } from "../../services/user";

export const getUserController = async (req: Request, res: Response) => {

  const user = await getUserService(req.params.id);

  return res.status(200).json(user);
};
