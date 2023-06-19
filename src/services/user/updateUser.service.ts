import { AppError } from "../../error/appError.error";
import { IUserUpdateRequest, iUserUpdateResponse } from "../../interfaces/user";
import { userUpdateResponseSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const updateUserService = async (
  id: string,
  payload: IUserUpdateRequest
): Promise<iUserUpdateResponse> => {
  for (let elem in payload) {
    if (payload[elem] === "") {
      delete payload[elem];
    }
  }

  const userFound = await userRepo.findOneBy({
    id: id,
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  const userUpdated = {
    ...userFound,
    ...payload,
  };

  await userRepo.save(userUpdated);

  const userWithout = await userUpdateResponseSchema.validate(userUpdated, {
    stripUnknown: true,
  });

  return userWithout;
};
