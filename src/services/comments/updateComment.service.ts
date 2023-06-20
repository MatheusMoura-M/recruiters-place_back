import { AppError } from "../../error/appError.error";
import { ICommentRequest, ICommentResponse } from "../../interfaces/comments";
import { commentResponseSchema } from "../../schemas/comments";
import { commentsRepo } from "../../utils/repositories";

export const updateCommentService = async (
  id: string,
  payload: ICommentRequest
): Promise<ICommentResponse> => {
  for (let elem in payload) {
    if (payload[elem] === "") {
      delete payload[elem];
    }
  }

  const commentFound = await commentsRepo.findOneBy({
    id: id,
  });

  if (!commentFound) {
    throw new AppError("Comment not found!", 404);
  }

  const commentUpdated = commentsRepo.create({
    ...commentFound,
    ...payload,
  });

  await commentsRepo.save(commentUpdated);

  const CommentValidated = await commentResponseSchema.validate(
    commentUpdated,
    {
      stripUnknown: true,
    }
  );

  return CommentValidated;
};
