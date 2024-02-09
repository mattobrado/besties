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
  bio: string;
  avatar?: string;
  date: number;
  fullName?: string;
  id: string;
  rating?: number;
  ratingCount: number;
  popularity: number;
  friendUids: string[];
  friendRequestsReceivedUids: string[];
  phoneNumber: string;
  favoriteColor?: string;
  favoriteFood?: string;
  favoriteAnimal?: string;
  favoriteSongId?: string;
  favoriteMovie?: string;
  isMember?: boolean;
  fieldOfExpertise?: string;
  iAmAQuickLearner?: string;
  iLikeDiscussingAbstractTopics?: string;
  math?: string;
};

export type ToggleLikeType = {
  id: string;
  isLiked: boolean;
  uid?: string;
};
