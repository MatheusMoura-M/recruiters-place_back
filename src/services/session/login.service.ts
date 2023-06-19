import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../error/appError.error";
import { userRepo } from "../../utils/repositories";
import { IUserLogin } from "../../interfaces/user";

export const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<{ token: string }> => {
  const user = await userRepo.findOneBy({
    email: email,
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

  return { token: token };
};
