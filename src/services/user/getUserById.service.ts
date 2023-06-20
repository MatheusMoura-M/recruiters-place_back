import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";

export const getUserByIdService = async (userId: string) => {
  const getUser = await userRepo.findOne({
    where: { id: userId },
  });

  if (!getUser) {
    throw new AppError("User not found!", 404);
  }

  return getUser;
};
