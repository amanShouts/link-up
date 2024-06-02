import { Post, PostType } from '@/components/home/post.tsx';
import useSWR from 'swr';
import { getAllPostFetcher } from '@/lib/fetchers/getAllPostFetcher.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';

export function Posts() {
  const { data, isLoading, error } = useSWR(
    `http://localhost:3000/api/posts/1`,
    getAllPostFetcher,
  );

  if (isLoading) return <PostsSkeleton />;
  if (error) return <div>Error loading posts</div>;
  return (
    <div className="grid gap-6 col-span-5">
      {data.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function PostsSkeleton() {
  return (
    <div className="grid gap-6 col-span-5">
      <Skeleton className={'w-full h-[400px] rounded-2xl'} />
      <Skeleton className={'w-full h-[400px] rounded-2xl'} />
      <Skeleton className={'w-full h-[400px] rounded-2xl'} />
    </div>
  );
}
