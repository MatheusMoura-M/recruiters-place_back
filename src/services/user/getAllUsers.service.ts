import { IUserResponse } from "../../interfaces/user";
import { getAllUsersSchema } from "../../schemas/user/getAllUsers.schema";
import { userRepo } from "../../utils/repositories";

export const getAllUsersService = async (): Promise<IUserResponse[]> => {
  const users = await userRepo.find();

  const usersValidated = await getAllUsersSchema.validate(users, {
    stripUnknown: true,
  });

  return usersValidated;
};
