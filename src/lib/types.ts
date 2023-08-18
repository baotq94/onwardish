export type Views = {
  total: number;
};

export type User = {
  user_id: string;
  name: string;
  email: string;
  image: string;
};

export type Comment = {
  comment_id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};

export type CommentWithUserId = {
  comment_id: string;
  created_at: number;
  url: string;
  text: string;
  user_id: string;
};
