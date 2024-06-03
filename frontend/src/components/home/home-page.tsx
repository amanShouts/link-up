import { Profile } from "@/components/home/profile.tsx";
import { Posts } from "@/components/home/posts.tsx";
import { Recommendation } from "@/components/home/recommendations.tsx";
import { RecoilRoot } from "recoil";

export default function HomePage() {
  const userId = 1;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 relative  gap-4 p-6 ">
      <RecoilRoot>
        <Profile userId={userId} />
        <Posts userId={userId} />
        <Recommendation />
      </RecoilRoot>
    </div>
  );
}
