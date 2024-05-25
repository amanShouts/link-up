import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CalendarIcon,
  EditIcon,
  HeartIcon,
  LocateIcon,
  MessageCircleIcon,
  Navigation2Icon,
  SendIcon,
  User2Icon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function HomePage() {
  return (
    <div className="grid grid-cols-10 relative  gap-4 p-6 ">
      <Profile />
      <Posts />
      <Recommendation />
    </div>
  );
}

function Profile() {
  return (
    <div className="flex flex-col gap-6 col-span-3 sticky top-24 h-fit">
      <div className="flex flex-col items-center gap-6 rounded-lg bg-white border border-neutral-400 dark:bg-black dark:border-neutral-700 ">
        <div className="relative w-full">
          {/*<img*/}
          {/*    alt="Banner"*/}
          {/*    className="h-auto w-full rounded-t-lg object-cover"*/}
          {/*    height={300}*/}
          {/*    src="/placeholder.svg"*/}
          {/*    style={{*/}
          {/*        aspectRatio: "600/300",*/}
          {/*        objectFit: "cover",*/}
          {/*    }}*/}
          {/*    width={600}*/}
          {/*/>*/}
          <div
            className={
              "w-full bg-neutral-300 dark:bg-neutral-700 aspect-[16/6] rounded-t-lg"
            }
          />
          <Avatar className="absolute bottom-0 left-1/2 h-16 w-16 -translate-x-1/2 translate-y-1/2  border-2 border-neutral-700 dark:border-black">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback className={"dark:bg-white"}>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className={"p-6 flex flex-col items-center gap-6"}>
          <div className="text-center 0">
            <h3 className="text-xl font-bold mb-2 dark:text-neutral-200">
              Cody Newman
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-300">
              Software Engineer at Acme Inc.
            </p>
            <div className="flex items-center justify-center text-sm gap-2 pt-2">
              <LocateIcon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
              <p className="text-sm text-gray-500 dark:text-neutral-300">
                San Francisco, CA
              </p>
            </div>
            <div className="flex items-center justify-center text-sm gap-2 pt-2">
              <CalendarIcon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
              <p className="text-sm text-gray-500 dark:text-neutral-300">
                Joined January 2021
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between text-sm font-medium">
            <div className="flex flex-col items-center ">
              <span className="text-2xl font-bold dark:text-neutral-200">
                1.2K
              </span>
              <span className="text-gray-500 dark:text-neutral-400">
                Followers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold dark:text-neutral-200">
                345
              </span>
              <span className="text-gray-500 dark:text-neutral-400">
                Following
              </span>
            </div>
          </div>
          <hr
            className={
              "border border-neutral-300 dark:border-neutral-700 w-full"
            }
          />
          <p className="text-sm text-center text-neutral-500 dark:text-neutral-300">
            Hi, I'm Cody, a software engineer passionate about building
            user-friendly applications. I love exploring new technologies and
            sharing my knowledge with the community. In my free time, I enjoy
            hiking, reading... and coding!
          </p>
          <Button
            className={
              "w-full group border border-neutral-400 dark:bg-black dark:border-neutral-700"
            }
            variant={"secondary"}
          >
            <SendIcon
              className={
                "mr-2 h-4 w-4 group-hover:rotate-45 transition-all duration-200 ease-linear"
              }
            />{" "}
            Create Post
          </Button>
          <Button className={"w-full"}>
            <EditIcon className={"mr-2 h-4 w-4"} />
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div className="grid gap-6 col-span-5">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

function Post() {
  return (
    <div>
      <Card className="rounded-2xl  shadow-neutral-300 dark:border-neutral-700 dark:shadow-none shadow-[0px_0px_20px_1px] ">
        <div className="flex pl-4 mt-4 gap-4 justify-between">
          <div className={"flex gap-4 items-center"}>
            <div className="relative">
              <Avatar className="  border-2 border-neutral-700">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Emily Johnson</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                @emilyjohnson
              </p>
            </div>
          </div>

          <Navigation2Icon className={"self-center h-4 w-4 mr-4 rotate-45"} />
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          {/*<img*/}
          {/*    alt="Post Image"*/}
          {/*    className="h-auto w-full rounded-lg object-cover"*/}
          {/*    height={300}*/}
          {/*    src="/placeholder.svg"*/}
          {/*    style={{*/}
          {/*        aspectRatio: "600/300",*/}
          {/*        objectFit: "cover",*/}
          {/*    }}*/}
          {/*    width={600}*/}
          {/*/>*/}
          <div
            className={
              "w-[full] aspect-video rounded-2xl bg-neutral-400 dark:bg-neutral-600"
            }
          />

          <div>
            <p className={"text-sm"}>
              Excited to share my latest project with you all! I've been working
              on a new web application that helps developers streamline their
              workflow. Can't wait to get your feedback.
            </p>
            <div className="flex items-center justify-between pt-4 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <HeartIcon className="h-5 w-5" />
                  <span className="sr-only">Like</span>
                </Button>

                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <Button size="icon" variant="ghost">
                      <MessageCircleIcon className="h-5 w-5" />
                      <span className="sr-only">Comment</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className={"border-none bg-transparent max-w-[600px]"}
                  >
                    <Comments />
                  </DialogContent>
                </Dialog>
                <Button size="icon" variant="ghost">
                  <SendIcon className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-xs">2h ago</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Comments() {
  return (
    <div>
      <Card className="rounded-2xl space-y-4 p-4  dark:border-neutral-700 dark:shadow-none shadow-[0px_0px_20px_1px] ">
        <div className={"flex flex-col gap-2"}>
          <Input
            placeholder={"Write some comment..."}
            className={"border-neutral-600"}
          />
          <Button
            className={
              "flex items-center justify-center bg-blue-400 text-black w-fit h-fit py-2 px-6 self-end"
            }
          >
            Post
          </Button>
        </div>

        <p className={"text-sm dark:text-neutral-200 ml-4  w-fit"}>
          All Comments
        </p>
        <hr className={"dark:border-neutral-700"} />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Card>
    </div>
  );
}

function Recommendation() {
  return (
    <div className={"col-span-2 flex flex-col gap-4 sticky top-24 h-fit"}>
      <RecommendationCard />
      <RecommendationCard />
      <RecommendationCard />
      <RecommendationCard />
      <RecommendationCard />
      <RecommendationCard />
      <Card
        className={
          "hover:top-[-4px] dark:border-neutral-700 hover:cursor-pointer relative top-0 transition-all duration-150 ease-in-out dark:hover:bg-neutral-800 hover:bg-neutral-200"
        }
      >
        <div className="flex pl-4 my-2 gap-4 text-center text-sm font-medium">
          <User2Icon className={"w-5 h-5"} /> Search for more Mentors...
        </div>
      </Card>
    </div>
  );
}

function Comment() {
  return (
    <Card className={"dark:border-neutral-800"}>
      <div className="flex pl-4 my-2 gap-4">
        <div className="relative">
          <Avatar className="  border-2 border-neutral-700  h-8 w-8">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback className={"text-sm"}>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h4 className="text-xs font-medium">Emily Johnson</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            @emilyjohnson
          </p>
        </div>
      </div>
      <p className={"text-xs px-4 pb-4"}>
        I think what you're building is amazing! Keep up the great work,
        Cody.and I can't wait to see the final product.
      </p>
    </Card>
  );
}

function RecommendationCard() {
  return (
    <Card className={"dark:border-neutral-700"}>
      <div className="flex pl-4 my-2 gap-4">
        <div className="relative">
          <Avatar className="  border-2 border-neutral-700  h-8 w-8">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback className={"text-sm"}>CN</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
        </div>
        <div>
          <h4 className="text-sm font-medium">Emily Johnson</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            @emilyjohnson
          </p>
        </div>
      </div>
    </Card>
  );
}
