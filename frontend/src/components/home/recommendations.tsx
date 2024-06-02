import { User2Icon } from 'lucide-react';
import { RecommendationCard } from '@/components/home/recommendation-card.tsx';
import useSWR from 'swr';
import { BACKEND_URL } from '@/config.ts';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';
import { MentorDataType } from '@/components/MentorListCard';

export function Recommendation() {
  const { data, isLoading, error } = useSWR(
    `${BACKEND_URL}/api/mentor/all`,
    async (url) => {
      return await axios.get(url);
    },
  );

  const navigate = useNavigate();

  // Error page
  if (error) return <div>Failed to load</div>;

  // Loading page
  if (isLoading) return <RecommendationSkeleton />;

  if (data) {
    return (
      <div className={'col-span-2 flex flex-col gap-4 sticky top-24 h-fit'}>
        {data.data.mentors.map((mentor: MentorDataType) => {
          return <RecommendationCard mentor={mentor} />;
        })}

        <Button
          onClick={() => navigate('/mentors')}
          className="flex pl-4 my-2 gap-4 text-center text-sm font-medium"
        >
          <User2Icon className={'w-5 h-5'} /> Search for more Mentors...
        </Button>
      </div>
    );
  }
}

function RecommendationSkeleton() {
  return (
    <div className={'col-span-2 flex flex-col gap-4 sticky top-24 h-fit'}>
      <Skeleton className="col-span-3 h-[60px] rounded-xl" />
      <Skeleton className="col-span-3 h-[60px] rounded-xl" />
      <Skeleton className="col-span-3 h-[60px] rounded-xl" />
      <Skeleton className="col-span-3 h-[60px] rounded-xl" />
      <Skeleton className="col-span-3 h-[60px] rounded-xl" />
      <Skeleton className="col-span-3 h-[60px] rounded-xl" />
    </div>
  );
}
