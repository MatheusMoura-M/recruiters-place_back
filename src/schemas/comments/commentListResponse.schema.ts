import * as yup from "yup";
import { ICommentListResponse } from "../../interfaces/comments";

export const commentListAllSchema: yup.SchemaOf<ICommentListResponse[]> =
  yup.array(
    yup.object().shape({
      id: yup.string().required(),
      comment: yup.string().required(),
      createdAt: yup.date().required(),
      updatedAt: yup.date().required(),
      users: yup
        .object()
        .shape({
          id: yup.string().required(),
          isRecruiter: yup.boolean().required(),
          email: yup.string().email().required(),
          name: yup.string().required(),
        })
        .required(),
    })
  );
