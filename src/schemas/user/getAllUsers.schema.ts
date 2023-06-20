import * as yup from "yup";
import {
  IUserResponse,
  IUserResponseIsNotRecruiter,
} from "../../interfaces/user";

export const getAllUsersSchema: yup.SchemaOf<IUserResponseIsNotRecruiter[]> =
  yup.array(
    yup.object().shape({
      tech: yup.object().shape({
        html: yup.boolean().required(),
        css: yup.boolean().required(),
        js: yup.boolean().required(),
        react: yup.boolean().required(),
        ts: yup.boolean().required(),
        angular: yup.boolean().required(),
        vuejs: yup.boolean().required(),
        php: yup.boolean().required(),
        c: yup.boolean().required(),
        node: yup.boolean().required(),
        sass: yup.boolean().required(),
      }),
      city: yup.string().required(),
      schooling: yup.string().required(),
      vacancy: yup.string().required(),
      isWork: yup.boolean().required(),
      linkedin: yup.string().required(),
      github: yup.string().required(),
      portfolio: yup.string().notRequired().nullable(),
      isRecruiter: yup.boolean().required(),
      email: yup.string().email().required(),
      name: yup.string().required(),
      id: yup.string().required(),
    })
  );

export const getAllUsersSchemaIsRecruiter: yup.SchemaOf<IUserResponse[]> =
  yup.array(
    yup.object().shape({
      isRecruiter: yup.boolean().required(),
      email: yup.string().email().required(),
      name: yup.string().required(),
      id: yup.string().required(),
    })
  );
