import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {CalendarIcon, EditIcon, LocateIcon, SendIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export function Profile() {
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