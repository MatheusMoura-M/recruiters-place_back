import * as yup from "yup";
import { IUserRequestIsRecruiter } from "../../interfaces/user";

export const userCreateRequestSchema: yup.SchemaOf<IUserRequestIsRecruiter> =
  yup.object().shape({
    isRecruiter: yup.boolean().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
  });
