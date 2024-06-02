import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.tsx";
import { ImageIcon, Link2Icon, SendIcon, VideoIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const Createpost = ({ userId }: { userId: string }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  async function postHandler() {
    console.log(title, desc, userId);
    try {
      await axios.post("http://localhost:3000/api/post/create", {
        title,
        desc,
        userId,
      });
      toast.success("Post created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error creating post");
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild={true}>
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
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create post</DialogTitle>
          <DialogDescription className={"pt-4"}>
            <div className={"space-y-4"}>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Title....."}
              />

              <Textarea
                className={"h-[300px]"}
                placeholder={"Description....."}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className={"sm:justify-between"}>
          <div className={"float-left"}>
            <Button variant={"link"}>
              <ImageIcon className={" h-6 w-6"} />
            </Button>
            <Button variant={"link"}>
              <Link2Icon className={" h-6 w-6"} />
            </Button>
            <Button variant={"link"}>
              <VideoIcon className={" h-6 w-6"} />
            </Button>
          </div>

          <Button className={"w-[100px]"} onClick={postHandler}>
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
