import { Post, PostType } from "@/components/home/post.tsx";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { GETTING_ALL_POSTS } from "@/config.ts";
import axios from "axios";
import { useRecoilState } from "recoil";
import { postState } from "@/store/store/posts.ts";

export function Posts({ userId }: { userId: number }) {
  const [posts, setPosts] = useRecoilState(postState);

  const { isLoading, error } = useSWR(
    `${GETTING_ALL_POSTS}/${userId}`,
    (url: string) =>
      axios.get(url).then((res) => {
        res.data;
        setPosts(res.data);
      }),
  );

  if (isLoading) return <PostsSkeleton />;
  if (error) return <div>Error loading posts</div>;
  return (
    <div className="grid gap-6 col-span-10 lg:col-span-7 xl:col-span-5">
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} userId={userId} />
      ))}
    </div>
  );
}

function PostsSkeleton() {
  return (
    <div className="grid gap-6 col-span-10 lg:col-span-7 xl:col-span-5">
      <Skeleton className={"w-full h-[400px] rounded-2xl"} />
      <Skeleton className={"w-full h-[400px] rounded-2xl"} />
      <Skeleton className={"w-full h-[400px] rounded-2xl"} />
    </div>
  );
}
