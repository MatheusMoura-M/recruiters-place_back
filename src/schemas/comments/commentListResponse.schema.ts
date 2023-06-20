import * as yup from "yup";
import { ICommentResponse } from "../../interfaces/comments";

export const commentListAllSchema: yup.SchemaOf<ICommentResponse[]> = yup.array(
  yup.object().shape({
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    userFrom: yup
      .object()
      .shape({
        id: yup.string().required(),
        name: yup.string().required(),
      })
      .required(),
    userTo: yup
      .object()
      .shape({
        id: yup.string().required(),
        name: yup.string().required(),
      })
      .required(),
    comment: yup.string().required(),
    id: yup.string().required(),
  })
);
