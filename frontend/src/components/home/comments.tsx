import { Card } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Comment } from "@/components/home/comment.tsx";

export function Comments() {
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
