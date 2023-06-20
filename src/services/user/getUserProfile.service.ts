import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";

export const userProfileService = async (id_user: string) => {
  const getUser = await userRepo.findOne({
    where: { id: id_user },
  });

  if (!getUser) {
    throw new AppError("User not found!", 404);
  }

  return getUser;
};