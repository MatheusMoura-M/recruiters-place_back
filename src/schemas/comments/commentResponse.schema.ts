import * as yup from "yup";
import { ICommentResponse } from "../../interfaces/comments";

export const commentResponseSchema: yup.SchemaOf<ICommentResponse> = yup
  .object()
  .shape({
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    userFrom: yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
    }),
    userTo: yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
    }),
    comment: yup.string().required(),
    id: yup.string().required(),
  });
