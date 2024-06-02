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
import { CircleMinus, LinkIcon, SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ImageUpload } from "@/components/home/image-upload.tsx";
import { VideoUpload } from "@/components/home/video-uplaod.tsx";
import { AttachingLink } from "@/components/home/attaching-link.tsx";
import { Card } from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";

export const Createpost = ({ userId }: { userId: string }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showLink, setShowLink] = useState(false);
  const [link, setLink] = useState<string>("");

  async function postHandler() {
    const id = toast.loading("Uploading post....");

    try {
      if (selectedImage) {
        await axios.post("http://localhost:3000/api/post/create", {
          title,
          desc,
          userId,
          imageLink: selectedImage,
        });
      } else if (selectedVideo) {
        await axios.post("http://localhost:3000/api/post/create", {
          title,
          desc,
          userId,
          videoLink: selectedVideo,
        });
      } else if (showLink) {
        await axios.post("http://localhost:3000/api/post/create/link", {
          title,
          desc,
          userId,
          link: link,
        });
      } else {
        await axios.post("http://localhost:3000/api/post/create/link", {
          title,
          desc,
          userId,
        });
      }

      toast.success("Post created successfully", {
        id,
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Error creating post");
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={true}>
        <Button
          className={
            "w-full group border border-neutral-400 dark:bg-black dark:border-neutral-700"
          }
          variant={"secondary"}
        >
          <SendIcon
            className={
              " mr-2 h-4 w-4 group-hover:rotate-45 transition-all duration-200 ease-linear"
            }
          />{" "}
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className={"max-h-[500px] overflow-y-auto"}>
        <DialogHeader>
          <DialogTitle className={"dark:text-neutral-200"}>
            Create post
          </DialogTitle>
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

              {link && (
                <Card
                  className={"p-4 border-neutral-700 flex items-center gap-3"}
                >
                  <LinkIcon className={"h-5 w-5"} />
                  <Link className={"hover:underline"} to={link}>
                    {link}
                  </Link>
                </Card>
              )}

              {showLink && (
                <Input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder={"Attachment Link"}
                />
              )}

              {selectedImage && (
                <div className={"relative"}>
                  <Button
                    onClick={() => setSelectedImage(null)}
                    className={"absolute right-2 top-2 h-fit p-0 z-50"}
                    variant={"link"}
                  >
                    <CircleMinus className={"w-5 h-4"} />
                  </Button>
                  <img
                    alt={"Selected Image"}
                    src={selectedImage}
                    className="h-auto w-full rounded-lg object-cover border border-neutral-800"
                  />
                </div>
              )}

              {selectedVideo && (
                <div className={"relative"}>
                  <Button
                    onClick={() => setSelectedVideo(null)}
                    className={"absolute right-2 top-2 h-fit p-0 z-50"}
                    variant={"link"}
                  >
                    <CircleMinus className={"w-5 h-4"} />
                  </Button>
                  <video
                    src={selectedVideo}
                    controls
                    className="h-auto w-full rounded-lg object-cover border border-neutral-800"
                  />
                </div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className={"sm:justify-between"}>
          <div className={"float-left flex items-center"}>
            <ImageUpload
              setSelectedImage={setSelectedImage}
              setSelectedVideo={setSelectedVideo}
              selectedVideo={selectedVideo}
              showLink={showLink}
              setShowLink={setShowLink}
            />
            <VideoUpload
              setSelectedVideo={setSelectedVideo}
              selectedImage={selectedImage}
              setShowLink={setShowLink}
              showLink={showLink}
              setSelectedImage={setSelectedImage}
            />
            <AttachingLink
              selectedImage={selectedImage}
              selectedVideo={selectedVideo}
              setShowLink={setShowLink}
              setSelectedImage={setSelectedImage}
              setSelectedVideo={setSelectedVideo}
            />
          </div>

          <Button className={"w-[100px]"} onClick={postHandler}>
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
