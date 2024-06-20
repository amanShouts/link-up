import AboutCard, { AboutDataType } from '@/components/AboutCard';
import ProfileCard from '@/components/ProfileCard';
import { ProfileDataType } from '@/components/ProfileCard';
import WorkExperienceCard, { WorkExperienceDataType } from '@/components/WorkExperienceCard';
import { BACKEND_URL } from '@/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MentorProfile() {
  const [profile, setProfile] = useState<UserDataType | null>(null);
  const { userId } = useParams();
  useEffect(() => {
    async function getProfileDetail() {
      const response = await axios.get(`${BACKEND_URL}/api/mentor/${userId}`);
      const data = await response.data;
      setProfile(data);
    }
    getProfileDetail();
  }, [userId]);

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center space-y-2">
      <ProfileCard data={profile?.profileData} />
      <AboutCard data={profile?.aboutData} />
      <WorkExperienceCard data={profile?.workExperienceData} />
    </div>
  );
}

interface UserDataType {
  userId: string;
  profileData: ProfileDataType;
  aboutData: AboutDataType;
  workExperienceData: WorkExperienceDataType;
}
