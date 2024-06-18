import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useNavigate } from 'react-router-dom';

export function FollowCard({ userId, name, username, imgSrc }: FollowDataType) {
  const navigate = useNavigate();
  return (
    <Card className="w-full h-full flex items-center gap-4 p-4 hover:dark:shadow-lg hover:dark:shadow-slate-200 transition">
      <Avatar className="w-12 h-12 border">
        <AvatarImage src={imgSrc} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="w-full flex justify-between">
        <div className="grid gap-1">
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">@{username}</div>
        </div>
        <div className="space-x-2">
          <Button
            variant="secondary"
            onClick={() => {
              navigate(`/profile/${userId}/follower`);
            }}
          >
            See Follower
          </Button>
          <Button
            className="hidden sm:inline-block"
            variant="secondary"
            onClick={() => {
              navigate(`/profile/${userId}/following`);
            }}
          >
            See Following
          </Button>
        </div>
      </div>
    </Card>
  );
}

export interface FollowDataType {
  userId: string;
  name: string;
  username: string;
  imgSrc: string;
}
