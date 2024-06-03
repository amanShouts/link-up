import AboutCard, { AboutDataType } from '@/components/AboutCard';
import MentorProfileCard, {
  ProfileDataType,
} from '@/components/MentorProfileCard';
import WorkExperienceCard, {
  WorkExperienceDataType,
} from '@/components/WorkExperienceCard';
import { BACKEND_URL } from '@/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MentorProfile() {
  const [profile, setProfile] = useState<UserDataType | null>(null);
  const { mentorId } = useParams();
  useEffect(() => {
    async function getProfileDetail() {
      const response = await axios.get(`${BACKEND_URL}/api/mentor/${mentorId}`);
      const data = await response.data;
      setProfile(data);
    }
    getProfileDetail();
  }, [mentorId]);

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-2">
      <MentorProfileCard data={profile?.profileData} />
      <AboutCard data={profile?.aboutData} />
      <WorkExperienceCard data={profile?.workExperienceData} />
    </div>
  );
}

interface UserDataType {
  mentorId: string;
  profileData: ProfileDataType;
  aboutData: AboutDataType;
  workExperienceData: WorkExperienceDataType;
}
