import { AppError } from "../../error/appError.error";
import {
  IUserRequestIsNotRecruiter,
  IUserResponse,
} from "../../interfaces/user";
import {
  userCreateAndUpdateResponseIsNotRecruiterSchema,
  userCreateAndUpdateResponseIsRecruiterSchema,
} from "../../schemas/user";
import { techsRepo, userRepo } from "../../utils/repositories";

export const createUserService = async (
  userData: IUserRequestIsNotRecruiter
): Promise<IUserResponse> => {
  const user = await userRepo.findOne({
    where: {
      email: userData.email,
    },
  });

  if (user) {
    throw new AppError("E-mail already registered", 409);
  }

  if (!userData.isRecruiter) {
    const {
      email,
      isRecruiter,
      name,
      password,
      city,
      github,
      isWork,
      linkedin,
      portfolio,
      schooling,
      tech,
      vacancy,
    } = userData;

    const newTech = techsRepo.create({ ...tech });
    await techsRepo.save(newTech);

    const newUser = userRepo.create({
      email,
      isRecruiter,
      name,
      password,
      city,
      github,
      isWork,
      linkedin,
      portfolio,
      schooling,
      vacancy,
      tech: newTech,
    });

    await userRepo.save(newUser);

    const clientWithoutPassword =
      await userCreateAndUpdateResponseIsNotRecruiterSchema.validate(newUser, {
        stripUnknown: true,
      });

    return clientWithoutPassword;
  }

  const newUser = userRepo.create({ ...userData });
  await userRepo.save(newUser);

  const clientWithoutPasswordIsRecruiter =
    await userCreateAndUpdateResponseIsRecruiterSchema.validate(newUser, {
      stripUnknown: true,
    });

  return clientWithoutPasswordIsRecruiter;
};
