import { AppError } from "../../error/appError.error";
import { ICommentRequest, ICommentResponse } from "../../interfaces/comments";
import { commentResponseSchema } from "../../schemas/comments";
import { commentsRepo, userRepo } from "../../utils/repositories";

export const createCommentService = async (
  idTo: string,
  idFrom: string,
  commentData: ICommentRequest
): Promise<ICommentResponse> => {
  const userToFound = await userRepo.findOne({
    where: {
      id: idTo,
    },
  });

  if (!userToFound) {
    throw new AppError("User not found!", 404);
  }
  console.log(idFrom);
  const userFromFound = await userRepo.findOne({
    where: {
      id: idFrom,
    },
  });

  if (!userFromFound) {
    throw new AppError("User not found!", 404);
  }

  const newComment = commentsRepo.create({
    ...commentData,
    userFrom: userFromFound,
    userTo: userToFound,
  });

  await commentsRepo.save(newComment);

  const returnedValidate = await commentResponseSchema.validate(newComment, {
    stripUnknown: true,
  });

  return returnedValidate;
};
