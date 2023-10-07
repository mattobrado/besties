export type LoginType = {
  email: string;
  password: string;
  redirectTo?: string;
};

export type SignupType = LoginType & {
  fullName: string;
  username: string;
};

export type PostType = {
  date: number;
  id: string;
  isReview?: boolean;
  isComment?: boolean;
  likes: string[];
  rating: number;
  revieweeId: string;
  reviewerId: string;
  text: string;
};

export type UserType = {
  avatar: string;
  date: number;
  fullName: string;
  id: string;
  username: string;
};

export type ToggleLikeType = {
  id: string;
  isLiked: boolean;
  uid: string;
};

export type CommentType = {
  text: string;
};
