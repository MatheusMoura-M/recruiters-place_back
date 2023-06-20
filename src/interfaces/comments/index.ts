export interface ICommentRequest {
  comment: string;
}

export interface ICommentResponse extends ICommentRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userTo: {
    id: string;
    name: string;
  };
  userFrom: {
    id: string;
    name: string;
  };
}

export interface ICommentUpdateRequest {
  comment?: string;
}
