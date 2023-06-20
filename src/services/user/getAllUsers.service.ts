import { IUserResponse } from "../../interfaces/user";
import {
  getAllUsersSchema,
  getAllUsersSchemaIsRecruiter,
} from "../../schemas/user/getAllUsers.schema";
import { userRepo } from "../../utils/repositories";

export const getAllUsersService = async (): Promise<IUserResponse[]> => {
  const usersIsNotRecruiter = await userRepo.find({
    where: { isRecruiter: false },
    relations: { tech: true },
  });

  const usersValidatedIsNotRecruiter = await getAllUsersSchema.validate(
    usersIsNotRecruiter,
    {
      stripUnknown: true,
    }
  );

  const usersIsRecruiter = await userRepo.find({
    where: { isRecruiter: true },
  });

  const usersValidatedIsRecruiter = await getAllUsersSchemaIsRecruiter.validate(
    usersIsRecruiter,
    {
      stripUnknown: true,
    }
  );

  const usersJoin = [
    ...usersValidatedIsNotRecruiter,
    ...usersValidatedIsRecruiter,
  ];

  return usersJoin;
};
