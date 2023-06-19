import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";

export const getUserService = async (userId: string) => {
  const getUser = await userRepo.findOne({
    where: { id: userId },
  });

  if (!getUser) {
    throw new AppError("User not found!", 404);
  }

  return getUser;
};
