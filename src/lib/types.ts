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
  isComment?: boolean;
  isReview?: boolean;
  commentCount: number;
  commentIds: string[];
  likeCount: number;
  likeUids: string[];
  parentPostId?: string;
  posterUid: string;
  rating: number;
  targetUid?: string;
  text: string;
};

export type UserType = {
  avatar: string;
  date: number;
  fullName: string;
  id: string;
  username: string;
  rating?: number;
  ratingCount: number;
  popularity: number;
  favorites: {
    color?: string;
    food?: string;
    animal?: string;
    song?: string;
    movie?: string;
  };
};

export type ToggleLikeType = {
  id: string;
  isLiked: boolean;
  uid: string;
};
