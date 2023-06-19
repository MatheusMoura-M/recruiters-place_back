import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserResponse } from "../../interfaces/user";

export const userCreateAndUpdateResponseSchema: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    isRecruiter: yup.boolean().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });
