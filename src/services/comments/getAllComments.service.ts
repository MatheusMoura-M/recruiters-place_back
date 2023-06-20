import { ICommentResponse } from "../../interfaces/comments";
import { commentListAllSchema } from "../../schemas/comments";
import { commentsRepo } from "../../utils/repositories";

export const getAllCommentsService = async (): Promise<ICommentResponse[]> => {
  const comments = await commentsRepo.find({
    relations: { userFrom: true, userTo: true },
  });

  const commentsValidated = await commentListAllSchema.validate(comments, {
    stripUnknown: true,
  });

  return commentsValidated;
};
