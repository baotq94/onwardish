export type Views = {
  total: number;
};

export type Comment = {
  comment_id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};

export type CommentWithUserEmail = {
  comment_id: string;
  created_at: number;
  url: string;
  text: string;
  user_email: string;
  user_name: string;
};

export type CommentWithStringSCreatedAt = {
  comment_id: string;
  created_at: string;
  url: string;
  text: string;
  user: User;
};

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
};

export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: number;
  user: User;
};

export type User = {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: number;
  image?: string;
  accounts: Account[];
  session: Session[];
};

export type VerificationToken = {
  identifier: string;
  token: string;
  expires: number;
};

export type LocaleType = {
  locale: string;
}