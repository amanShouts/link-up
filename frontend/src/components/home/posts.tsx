import {Post} from "@/components/home/post.tsx";

export function Posts() {
    return (
        <div className="grid gap-6 col-span-5">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}