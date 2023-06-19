import * as yup from "yup";
import { ICommentRequest } from "../../interfaces/comments";

export const commentRequestSchema: yup.SchemaOf<ICommentRequest> = yup
  .object()
  .shape({
    comment: yup.string().required(),
  });
