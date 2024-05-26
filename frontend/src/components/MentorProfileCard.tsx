import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function MentorProfileCard({
  data,
}: {
  data?: ProfileDataType;
}) {
  if (!data) {
    return null;
  }
  return (
    <Card className="w-full max-w-2xl rounded-lg shadow-md overflow-hidden hover:shadow-2xl dark:hover:shadow-slate-200 transition duration-500">
      <div className="relative">
        <img
          alt="Background"
          className="w-full h-48 object-cover"
          height="200"
          src={data.bgImg}
          style={{
            aspectRatio: "1063/200",
            objectFit: "cover",
          }}
          width="1063"
        />
        <Avatar className="absolute -bottom-12 left-4 w-24 h-24 border-4 border-white rounded-full">
          <AvatarImage
            alt="Profile picture"
            height="96"
            width="96"
            src={data.profileImg}
          />
        </Avatar>
      </div>
      <div className="pt-16 pb-4 px-4">
        <h3 className="text-xl font-semibold">{data.name}</h3>
        <p className="text-sm text-gray-500">{data.desc}</p>
        <p className="text-sm text-gray-500">{data.location}</p>
        <div className="flex mt-3">
          <Button className="mr-2 active:ring-2" variant="default">
            Connect
          </Button>
          <Button className="mr-2 active:ring-2" variant="secondary">
            Follow
          </Button>
          <Button className="mr-2 active:ring-2" variant="secondary">
            DM
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
  desc: string;
  location: string;
}
