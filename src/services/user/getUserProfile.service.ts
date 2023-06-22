import { AppError } from "../../error/appError.error";
import {
  userCreateAndUpdateResponseIsNotRecruiterSchema,
  userCreateAndUpdateResponseIsRecruiterSchema,
} from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const userProfileService = async (id_user: string) => {
  const getUser = await userRepo.findOne({
    where: { id: id_user },
    relations: {
      tech: true,
    },
  });

  if (!getUser) {
    throw new AppError("User not found!", 404);
  }

  if (getUser.isRecruiter) {
    const getUserRecruiter = await userRepo.findOne({
      where: { id: id_user },
    });

    const clientWithoutPasswordIsRecruiter =
      await userCreateAndUpdateResponseIsRecruiterSchema.validate(
        getUserRecruiter,
        {
          stripUnknown: true,
        }
      );

    return clientWithoutPasswordIsRecruiter;
  }

  const clientWithoutPasswordIsNotRecruiter =
    await userCreateAndUpdateResponseIsNotRecruiterSchema.validate(getUser, {
      stripUnknown: true,
    });

  return clientWithoutPasswordIsNotRecruiter;
};
