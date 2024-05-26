import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function MentorListCard({ data }: { data: MentorDataType }) {
  return (
    <Card className="max-w-sm rounded-lg shadow-md overflow-hidden hover:shadow-2xl dark:hover:shadow-slate-200 transition duration-500">
      <CardHeader>
        <Link to={data.id}>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage alt="Mentor Avatar" src={data.imgSrc} />
              <AvatarFallback>{data.name.toUpperCase()[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">{data.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {data.currPost}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {data.desc}
            </p>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-wrap gap-2">
          <div className="font-bold">Industry :</div>
          {data.industry.map((industryType, index) => {
            return (
              <Badge
                key={index}
                className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                variant="outline"
              >
                {industryType}
              </Badge>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="font-bold">Mentors Of</div>
          {data.currMentor.map((company, index) => {
            return (
              <Badge
                key={index}
                className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                variant="outline"
              >
                {company}
              </Badge>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="font-bold">Skills :</div>
          {data.skills.map((skill, index) => {
            return (
              <Badge
                key={index}
                className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                variant="outline"
              >
                {skill}
              </Badge>
            );
          })}
        </div>
        <div className="w-full flex justify-between">
          <Button className="active:bg-slate-300">Connect</Button>
          <Button className="active:bg-slate-300">Follow</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export interface MentorDataType {
  id: string;
  name: string;
  desc?: string;
  imgSrc?: string;
  currPost?: string;
  industry: string[];
  currMentor: string[];
  skills: string[];
}
