export interface IUserRequestIsRecruiter {
  name: string;
  email: string;
  password: string;
  isRecruiter: boolean;
}

export interface iOmitClientPassword
  extends Omit<IUserRequestIsRecruiter, "password"> {}

export interface IUserResponse extends iOmitClientPassword {
  id: string;
}

export interface IUserRequestIsNotRecruiter {
  name: string;
  email: string;
  password: string;
  isRecruiter: boolean;
  city?: string;
  schooling?: string;
  vacancy?: string;
  isWork?: boolean;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  tech?: {
    html: boolean;
    css: boolean;
    js: boolean;
    react: boolean;
    ts: boolean;
    angular: boolean;
    vuejs: boolean;
    php: boolean;
    c: boolean;
    node: boolean;
    sass: boolean;
  };
}

export interface iOmitClientPasswordIsNotRecruiter
  extends Omit<IUserRequestIsNotRecruiter, "password"> {}

export interface IUserResponseIsNotRecruiter
  extends iOmitClientPasswordIsNotRecruiter {
  id: string;
}
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  password?: string;
  isRecruiter?: boolean;
}

export interface iUserUpdateResponse
  extends Omit<IUserUpdateRequest, "password"> {
  id?: string;
}
