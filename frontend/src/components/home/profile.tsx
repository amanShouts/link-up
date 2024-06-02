import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar.tsx';
import { CalendarIcon, EditIcon, LocateIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import useSWR from 'swr';
import { getSingleUserDetail } from '@/lib/fetchers/getSingleUserDetail.ts';
import { Skeleton } from '@/components/ui/skeleton';
import { Createpost } from '@/components/home/create-post.tsx';

export function Profile() {
  const { data, error, isLoading } = useSWR(
    'http://localhost:3000/api/user/2',
    getSingleUserDetail,
  );

  if (isLoading) return <ProfileSkeleton />;
  if (error) return <div>Error loading</div>;

  if (data) {
    return (
      <div className="flex flex-col gap-6 col-span-3 sticky top-24 h-fit">
        <div className="flex flex-col items-center gap-6 rounded-lg bg-white border border-neutral-400 dark:bg-black dark:border-neutral-700 ">
          <div className="relative w-full">
            {data?.bgImg ? (
              <img
                alt="Banner"
                className="h-auto w-full rounded-t-lg aspect-[16/6] object-cover"
                src={data?.bgImg}
              />
            ) : (
              <div
                className={
                  'w-full bg-neutral-300 dark:bg-neutral-700 aspect-[16/6] rounded-t-lg'
                }
              />
            )}

            <Avatar className="absolute bottom-0 left-1/2 h-16 w-16 -translate-x-1/2 translate-y-1/2  border-2 border-neutral-700 dark:border-black">
              <AvatarImage
                alt="@shadcn"
                src={data?.img}
                className={'object-cover'}
              />
              <AvatarFallback className={'dark:bg-white'}>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className={'p-6 flex flex-col items-center gap-6'}>
            <div className="text-center 0">
              <h3 className="text-xl font-bold mb-2 dark:text-neutral-200">
                {data?.name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-neutral-300">
                {data?.currDesignation}
              </p>
              <div className="flex items-center justify-center text-sm gap-2 pt-2">
                <LocateIcon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                <p className="text-sm text-gray-500 dark:text-neutral-300">
                  {data?.city}, {data?.country}
                </p>
              </div>
              <div className="flex items-center justify-center text-sm gap-2 pt-2">
                <CalendarIcon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                <p className="text-sm text-gray-500 dark:text-neutral-300">
                  {data?.createdAt.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between items-center text-sm font-medium">
              <div className="flex items-center gap-1 w-[30%]">
                <span className="text-lg font-bold dark:text-neutral-200">
                  {data?.age}
                </span>
                <span className="text-sm font-medium dark:text-neutral-400">
                  {' '}
                  years old
                </span>
              </div>
              <span className="text-sm font-normal text-gray-500 dark:text-neutral-300 ">
                @_{data?.username}
              </span>
              <div className="flex flex-col items-end w-[30%]">
                <span className="text-base  font-bold dark:text-neutral-200">
                  {data?.isMentor ? 'Mentor' : 'Mentee'}
                </span>
              </div>
            </div>
            <p className={'font-medium text-center'}>{data?.type}</p>
            <hr
              className={
                'border border-neutral-300 dark:border-neutral-700 w-full'
              }
            />
            <p className="text-sm text-center text-neutral-500 dark:text-neutral-300">
              {data?.desc}
            </p>
            {data.username && <Createpost userId={data.id} />}

            <Button className={'w-full'}>
              <EditIcon className={'mr-2 h-4 w-4'} />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

function ProfileSkeleton() {
  return <Skeleton className="col-span-3 h-[70vh] rounded-xl" />;
}
