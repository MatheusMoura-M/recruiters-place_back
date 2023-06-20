import { AppError } from "../../error/appError.error";
import { commentsRepo } from "../../utils/repositories";

export const getCommentByIdService = async (commentId: string) => {
  const getComment = await commentsRepo.findOne({
    where: { id: commentId },
  });

  if (!getComment) {
    throw new AppError("Comment not found!", 404);
  }

  return getComment;
};
