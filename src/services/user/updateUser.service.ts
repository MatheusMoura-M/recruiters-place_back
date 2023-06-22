import { AppError } from "../../error/appError.error";
import {
  IUserRequestIsNotRecruiter,
  iUserUpdateResponse,
} from "../../interfaces/user";
import {
  userCreateAndUpdateResponseIsNotRecruiterSchema,
  userCreateAndUpdateResponseIsRecruiterSchema,
} from "../../schemas/user";
import { techsRepo, userRepo } from "../../utils/repositories";

export const updateUserService = async (
  id: string,
  payload: IUserRequestIsNotRecruiter
): Promise<iUserUpdateResponse> => {
  for (let elem in payload) {
    if (payload[elem] === "") {
      delete payload[elem];
    }
  }

  const userFound = await userRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      tech: true,
    },
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  if (userFound.isRecruiter) {
    const userFoundIsRecruiter = await userRepo.findOne({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        isRecruiter: true,
      },
    });

    const userUpdatedIsRecruiter = {
      ...userFoundIsRecruiter,
      ...payload,
    };

    await userRepo.save({
      id: userUpdatedIsRecruiter.id,
      name: userUpdatedIsRecruiter.name,
      email: userUpdatedIsRecruiter.email,
      password: userUpdatedIsRecruiter.password,
      isRecruiter: userUpdatedIsRecruiter.isRecruiter,
    });

    const clientWithoutPasswordIsRecruiter =
      await userCreateAndUpdateResponseIsRecruiterSchema.validate(
        userUpdatedIsRecruiter,
        {
          stripUnknown: true,
        }
      );

    return clientWithoutPasswordIsRecruiter;
  }

  if (payload.tech) {
    const techFound = await techsRepo.findOne({
      where: {
        id: userFound.tech.id,
      },
    });

    if (!techFound) {
      throw new AppError("Tech not found!", 404);
    }

    const techUpdated = {
      ...techFound,
      ...payload.tech,
    };

    await techsRepo.save(techUpdated);
  }

  const userFoundUpdated = await userRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      tech: true,
    },
  });

  const userUpdated = {
    ...userFoundUpdated,
    ...payload,
  };
  userUpdated.tech = { ...userFoundUpdated.tech };

  await userRepo.save(userUpdated);

  const clientWithoutPasswordIsNotRecruiter =
    await userCreateAndUpdateResponseIsNotRecruiterSchema.validate(
      userUpdated,
      {
        stripUnknown: true,
      }
    );

  return clientWithoutPasswordIsNotRecruiter;
};
