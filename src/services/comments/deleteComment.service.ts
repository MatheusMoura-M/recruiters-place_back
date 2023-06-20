import { AppError } from "../../error/appError.error";
import { commentsRepo } from "../../utils/repositories";

export const deleteCommentService = async (id: string) => {
  const commentFound = await commentsRepo.findOne({
    where: {
      id: id,
    },
  });

  if (!commentFound) {
    throw new AppError("Comment not found!", 404);
  }

  await commentsRepo.delete(id);

  return {};
};
