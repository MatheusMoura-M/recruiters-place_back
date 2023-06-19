import { hash } from "bcryptjs";
import { AppError } from "../../error/appError.error";
import { IUserRequest, IUserResponse } from "../../interfaces/user";
import { userCreateAndUpdateResponseSchema } from "../../schemas/user";
import { userRepo } from "../../utils/repositories";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const user = await userRepo.findOne({
    where: {
      email: userData.email,
    },
  });

  if (user) {
    throw new AppError("E-mail already registered", 409);
  }

  const newUser = userRepo.create({ ...userData });

  await userRepo.save(newUser);

  const clientWithoutPassword =
    await userCreateAndUpdateResponseSchema.validate(newUser, {
      stripUnknown: true,
    });

  return clientWithoutPassword;
};
