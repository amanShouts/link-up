import { atom } from "recoil";
import { PostType } from "@/components/home/post.tsx";

export const postState = atom({
  key: "postState",
  default: [] as PostType[],
});
