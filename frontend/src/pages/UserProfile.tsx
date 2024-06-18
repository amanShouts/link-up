import AboutCard, { AboutDataType } from '@/components/AboutCard';
import MentorProfileCard, { ProfileDataType } from '@/components/MentorProfileCard';
import WorkExperienceCard, { WorkExperienceDataType } from '@/components/WorkExperienceCard';
import { BACKEND_URL } from '@/config';
import { RootState } from '@/store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [_, setUser] = useState<any>();
  const [username, setUsername] = useState();

  const { userId } = useParams();
  const { users } = useSelector((state: RootState) => state.users);

  const [profile, setProfile] = useState<UserDataType | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const temp: any = users.find((user) => user.id.toString() === userId);
    setUsername(temp?.username);
    setUser(temp);
  }, [userId, users]);

  useEffect(() => {
    async function getProfileDetail() {
      const response = await axios.get(`${BACKEND_URL}/api/profile/${username}`);
      const data = await response.data;
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
