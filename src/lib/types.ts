export type LoginType = {
  email: string;
  password: string;
  redirectTo?: string;
};

export type SignupType = LoginType & {
  fullName: string;
  username: string;
};

export type ReviewType = {
  rating: number;
  revieweeId: string;
  reviewerId: string;
  text: string;
};
