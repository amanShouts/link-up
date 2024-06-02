import { Card } from "@/components/ui/card.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { commentType } from "./comments.tsx";

export function Comment({ comment }: { comment: commentType }) {
  return (
    <Card className={"dark:border-neutral-800"}>
      <div className="flex pl-4 my-2 gap-4">
        <div className="relative">
          <Avatar className="  border-2 border-neutral-700  h-8 w-8">
            <AvatarImage alt="@shadcn" src={comment.user.img} />
            <AvatarFallback className={"text-sm"}>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h4 className="text-xs font-medium">Emily Johnson</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {comment.user.username}
          </p>
        </div>
      </div>
      <p className={"text-xs px-4 pb-4"}>{comment.commentContent}</p>
    </Card>
  );
}
