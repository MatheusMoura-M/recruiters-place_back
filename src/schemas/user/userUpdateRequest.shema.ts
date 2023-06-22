import * as yup from "yup";
import { IUserRequestIsNotRecruiter } from "../../interfaces/user";

export const userUpdateRequestSchema: yup.SchemaOf<IUserRequestIsNotRecruiter> =
  yup.object().shape({
    tech: yup.object().shape({
      html: yup.boolean().notRequired(),
      css: yup.boolean().notRequired(),
      js: yup.boolean().notRequired(),
      react: yup.boolean().notRequired(),
      ts: yup.boolean().notRequired(),
      angular: yup.boolean().notRequired(),
      vuejs: yup.boolean().notRequired(),
      php: yup.boolean().notRequired(),
      c: yup.boolean().notRequired(),
      node: yup.boolean().notRequired(),
      sass: yup.boolean().notRequired(),
    }),
    city: yup.string().notRequired(),
    schooling: yup.string().notRequired(),
    vacancy: yup.string().notRequired(),
    isWork: yup.boolean().notRequired(),
    linkedin: yup.string().notRequired(),
    github: yup.string().notRequired(),
    portfolio: yup.string().notRequired().nullable(),
    isRecruiter: yup.boolean().notRequired(),
    password: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
  });
