import * as yup from "yup";
import { IUserResponse } from "../../interfaces/user";

export const getAllUsersSchema: yup.SchemaOf<IUserResponse[]> = yup.array(
  yup.object().shape({
    isRecruiter: yup.boolean().required(),
    email: yup.string().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  })
);
