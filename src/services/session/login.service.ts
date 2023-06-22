import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";
import { IUserLogin } from "../../interfaces/user";
import { User } from "../../entities";

export const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<{ accessToken: string; user: User }> => {
  const user = await userRepo.findOne({
    where: {
      email: email,
    },
    relations: {
      tech: true,
    },
  });

  if (!user) {
    throw new AppError("Invalid User or password!", 404);
  }

  const passwordCheck = await compare(password, user?.password as string);

  if (!passwordCheck) {
    throw new AppError("Invalid User or password!", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      subject: String(user.id),
      expiresIn: process.env.EXPIRES_IN,
    }
  );

  if (user.isRecruiter) {
    const userFoundIsRecruiter = await userRepo.findOne({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isRecruiter: true,
      },
    });

    return { accessToken: token, user: userFoundIsRecruiter };
  }

  return { accessToken: token, user: user };
};
