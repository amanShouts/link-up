import {Card} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {HeartIcon, MessageCircleIcon, Navigation2Icon, SendIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Comments} from "@/components/home/comments.tsx";

export function Post() {
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