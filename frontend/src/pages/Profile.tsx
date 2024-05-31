import AboutCard, { AboutDataType } from "@/components/AboutCard";
import MentorProfileCard, {
  ProfileDataType,
} from "@/components/MentorProfileCard";
import WorkExperienceCard, {
  WorkExperienceDataType,
} from "@/components/WorkExperienceCard";
import { BACKEND_URL } from "@/config";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const { user } = useUser();
  const [profile, setProfile] = useState<UserDataType | null>(null);
  const { username } = user as unknown as { username: string };
  useEffect(() => {
    async function getProfileDetail() {
      const response = await axios.get(
        `${BACKEND_URL}/api/profile/${username}`
      );
      const data = await response.data;
      console.log(data);
      setProfile(data);
    }
    getProfileDetail();
  }, [username]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-2">
      <MentorProfileCard data={profile?.profileData} />
      <AboutCard data={profile?.aboutData} />
      <WorkExperienceCard data={profile?.workExperienceData} />
    </div>
  );
}

interface UserDataType {
  id: string;
  profileData: ProfileDataType;
  aboutData: AboutDataType;
  workExperienceData: WorkExperienceDataType;
}
