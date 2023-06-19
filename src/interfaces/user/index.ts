export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isRecruiter: boolean;
}

export interface iOmitClientPassword extends Omit<IUserRequest, "password"> {}

export interface IUserResponse extends iOmitClientPassword {
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
