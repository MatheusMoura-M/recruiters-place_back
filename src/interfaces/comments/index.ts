export interface ICommentRequest {
  comment: string;
}

export interface ICommentResponse extends ICommentRequest {
  id: string;
}

export interface ICommentListResponse {
  id: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  users: {
    id: string;
    isRecruiter: boolean;
    email: string;
    name: string;
  };
}
