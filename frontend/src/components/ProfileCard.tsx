import { AvatarImage, Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '@/config';
import { useUser } from '@clerk/clerk-react';

export default function ProfileCard({ data }: { data?: ProfileDataType }) {
  const { user } = useUser();
  const [isFollow, setIsFollow] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user || !data) return;
    axios
      .post(`${BACKEND_URL}/api/follow/isFollow`, {
        followerUsername: data.username,
        currUser: user.username,
      })
      .then(async (response) => {
        const data = await response.data;
        setIsFollow(data.isFollow);
      })
      .finally(() => setLoading(false));
  }, [user, data]);

  if (!user || !data) {
    return null;
  }
  const followBtnHandler = async () => {
    try {
      if (!isFollow) {
        await axios.post(`${BACKEND_URL}/api/follow`, {
          followerUsername: data.username,
          username: user.username,
        });
        setIsFollow(true);
      } else {
        await axios.put(`${BACKEND_URL}/api/follow`, {
          username: user.username,
          followerUsername: data.username,
        });
        setIsFollow(false);
      }
    } catch (error) {
      console.error('something went wrong');
    }
  };
  return (
    <Card className="w-full max-w-2xl rounded-lg shadow-md overflow-hidden hover:shadow-2xl dark:hover:shadow-slate-200 transition duration-500 h-[100%] max-h-[320px]">
      <div className="relative">
        <img
          alt="Background"
          className="w-full object-cover"
          height="200"
          src={data.bgImg}
          style={{
            aspectRatio: '1063/200',
            objectFit: 'cover',
          }}
          width="1063"
        />
        <Avatar className="absolute -bottom-12 left-4 w-24 h-24 border-4 border-white rounded-full">
          <AvatarImage alt="Profile picture" height="96" width="96" src={data.profileImg} />
        </Avatar>
      </div>
      <div className="pt-16 pb-4 px-4">
        <h3 className="text-xl font-semibold">{data.name}</h3>
        <p className="text-sm text-gray-500">{data.desc}</p>
        <p className="text-sm text-gray-500">{data.location}</p>
        <div className="flex mt-3">
          <Link to={'/direct-messages'}>
            <Button className="mr-2 active:ring-2" variant="default">
              DM
            </Button>
          </Link>
          <Button className={`mr-2 active:ring-2 ${loading ? 'hidden' : 'block'}`} variant="secondary" onClick={followBtnHandler}>
            {isFollow ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export interface ProfileDataType {
  bgImg: string;
  profileImg: string;
  name: string;
  username: string;
  desc: string;
  location: string;
}
