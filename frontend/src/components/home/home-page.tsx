import { Profile } from '@/components/home/profile.tsx';
import { Posts } from '@/components/home/posts.tsx';
import { Recommendation } from '@/components/home/recommendations.tsx';
import { RecoilRoot } from 'recoil';
import { useUser } from '@clerk/clerk-react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/store/store.ts';

export default function HomePage() {
  const { user } = useUser();
  const username = user?.username;
  const storedUsers = useSelector((state: RootState) => state.users.users);
  const [userId, setUserId] = useState<number | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [img, setImg] = useState<string | undefined>();

  useEffect(() => {
    if (user) {
      const currentUser = storedUsers.find((el) => el.username === username);
      setUserId(currentUser?.id);
      setName(currentUser?.name);
      setImg(currentUser?.img);
    }
  }, [storedUsers, username]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 relative  h-full min:h-screen gap-4 p-6 ">
      <RecoilRoot>
        {userId && username && name && img && (
          <>
            <Profile userId={userId} />
            <Posts userId={userId} username={username} name={name} img={img} />
            <Recommendation />
          </>
        )}
      </RecoilRoot>
    </div>
  );
}
