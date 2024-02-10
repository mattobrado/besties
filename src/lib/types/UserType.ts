type UserType = {
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
  iAmAboveAverage?: string;
  isApplicationSubmitted?: boolean;
  mystery?: string;
};

export default UserType;
