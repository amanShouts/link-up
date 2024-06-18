import { FollowCard, FollowDataType } from '@/components/FollowCard';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BACKEND_URL } from '@/config';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

export default function FollowerList() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [followData, setFollowData] = useState<UserFollowData | null>(null);
  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/api/follow/following`, {
        userId: userId,
      })
      .then(async (response) => {
        const data = await response.data;
        setFollowData(data.following);
      });
  }, [userId]);
  if (!followData) return <span className="flex items-center justify-center min-h-screen text-2xl">No Follower</span>;
  return (
    <div className="mx-auto max-w-3xl w-full py-8 px-4 md:px-0">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16 border-2 border-gray-200 dark:border-gray-700">
          <AvatarImage src={followData.imgSrc} />
          <AvatarFallback>{followData.name[0]}</AvatarFallback>
        </Avatar>
        <div className="w-full flex justify-between">
          <div className="font-semibold text-lg">{followData.name}</div>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div>
              <span className="font-medium">{followData.follow.length}</span> following
            </div>
            <div>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate(`/profile/${userId}/follower`);
                }}
              >
                See Followers
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        {followData.follow.map((each) => {
          return <FollowCard key={each.userId} name={each.name} userId={each.userId} username={each.username} imgSrc={each.imgSrc} />;
        })}
      </div>
    </div>
  );
}

export interface UserFollowData {
  id: number;
  name: string;
  username: string;
  imgSrc: string;
  follow: FollowDataType[];
}
