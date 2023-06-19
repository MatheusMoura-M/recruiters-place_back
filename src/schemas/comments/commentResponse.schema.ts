import * as yup from "yup";
import { ICommentResponse } from "../../interfaces/comments";

export const commentResponseSchema: yup.SchemaOf<ICommentResponse> = yup
  .object()
  .shape({
    comment: yup.string().required(),
    users: yup.object().shape({
      id: yup.string().required(),
    }),
    id: yup.string().required(),
  });
