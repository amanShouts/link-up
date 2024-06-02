import { Profile } from "@/components/home/profile.tsx";
import { Posts } from "@/components/home/posts.tsx";
import { Recommendation } from "@/components/home/recommendations.tsx";

export default function HomePage() {
  return (
    <div className="grid grid-cols-10 relative  gap-4 p-6 ">
      <Profile />
      <Posts />
      <Recommendation />
    </div>
  );
}
