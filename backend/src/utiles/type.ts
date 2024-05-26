export interface MentorDataType {
  name: string;
  desc?: string;
  imgSrc?: string;
  currPost?: string;
  industry: string[];
  currMentor: string[];
  skills: string[];
}

export interface UserDataType {
  userId: string;
  profileData: ProfileDataType;
  aboutData: AboutDataType;
  workExperienceData: WorkExperienceDataType;
}

interface ProfileDataType {
  name: string;
  profileImg: string;
  bgImg: string;
  bio: string;
  location: string;
}

interface AboutDataType {
  about: string;
}

interface WorkExperienceDataType {
  company: {
    companyName: string;
    companyLogo?: string;
    role: string;
    desc: string;
    startYear: string;
    endYear: string;
  }[];
}