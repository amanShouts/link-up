export interface UpdateUserDataParams {
  id: number;
  username: string;
  userType: UserType;
  isMentor: boolean;
  age: number;
  bio: string;
  city: string;
  country: string;
}