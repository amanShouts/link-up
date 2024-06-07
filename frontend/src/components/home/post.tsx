import { Card } from '@/components/ui/card.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { HeartIcon, LinkIcon, MessageCircleIcon, ViewIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.tsx';
import { Comments } from '@/components/home/comments.tsx';
import { timeAgo } from '@/utils/timeAgo.ts';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils.ts';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '@/config.ts';

export type PostType = {
  id: number;
  user: {
    id: number;
    name: string;
    img: string;
    username: string;
  };
  like: number;
  comment: number;
  createdAt: Date;
  title: string;
  desc: number;
  view: number;
  label: string;
  img?: string;
  video?: string;
  link?: string;
  liked: boolean;
  comments: {
    id: number;
    user: {
      name: string;
      img: string;
      username: string;
    };
    createdAt: Date;
    commentContent: string;
  }[];
};

export function Post({ post, userId, name, img, username }: { post: PostType; userId: number; name: string; img: string; username: string }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.like);
  const postRef = useRef(null);

  useEffect(() => {
    setLiked(post.liked);
    setLikes(post.like);
  }, [post.liked, post.like]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          try {
            await axios.post(`${BACKEND_URL}/api/post/view`, {
              userId: post.user.id,
              postId: post.id,
            });
          } catch (error) {
            console.error('Error updating view count:', error);
          }
        }
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      },
    );

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, [post.id, post.user.id]);

  const likeHandler = async () => {
    if (!liked) {
      setLiked(true);
      setLikes((like) => like + 1);
      try {
        await axios.post(`${BACKEND_URL}/api/post/like`, {
          postId: post.id,
          userId: userId,
        });
      } catch (error) {
        // Handle error, maybe revert the state
        setLiked(false);
        setLikes((like) => like - 1);
        console.error('Error liking post', error);
      }
    } else {
      setLiked(false);
      setLikes((like) => like - 1);
      try {
        await axios.post(`${BACKEND_URL}/api/post/unlike`, {
          postId: post.id,
          userId: userId,
        });
      } catch (error) {
        // Handle error, maybe revert the state
        setLiked(true);
        setLikes((like) => like + 1);
        console.error('Error liking post', error);
      }
    }
  };

  return (
    <div ref={postRef}>
      <Card className="rounded-2xl  shadow-neutral-300 dark:border-neutral-700 dark:shadow-none shadow-[0px_0px_20px_1px] ">
        <div className="flex pl-4 mt-4 gap-4 justify-between">
          <div className={'flex gap-4 items-center'}>
            <div className="relative">
              <Avatar className="border-2 border-neutral-700">
                <AvatarImage alt="@shadcn" src={post.user.img} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
            </div>
            <div>
              <h4 className="text-sm font-medium">{post.user.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">@_{post.user.username}</p>
            </div>
          </div>

          <p>{post.label}</p>
        </div>

        <div className="p-4">
          <h3 className="text-base underline font-semibold">{post.title}</h3>
          <p className="dark:text-neutral-300 text-neutral-700 text-sm">{post.desc}</p>
        </div>

        <div className="grid grid-cols-1 gap-2 p-4">
          {post.img && <img alt="Post Image" className="h-auto w-full rounded-lg object-cover" src={post.img} />}

          {post.video && <video className="h-auto w-full rounded-lg object-cover" src={post.video} controls />}

          {post.link && (
            <Card className={'p-4 border-neutral-700 flex items-center gap-3'}>
              <LinkIcon className={'h-5 w-5'} />
              <Link className={'hover:underline'} to={post.link}>
                {post.link}
              </Link>
            </Card>
          )}

          <div>
            <div className="flex items-center justify-between pt-2 text-gray-500 dark:text-gray-400">
              <div className="flex items-center justify-between w-full">
                <Button size="icon" variant="ghost" className={'flex gap-1'} onClick={likeHandler}>
                  <HeartIcon className={cn('h-4 w-4 transition-all duration-150 ease-linear', liked ? 'fill-red-500 text-red-500' : 'text-gray-500')} />
                  <span className="sr-only">Like</span>
                  <span className={'text-sm'}>{likes}</span>
                </Button>
                <Dialog>
                  <DialogTrigger>
                    {' '}
                    <Button size="icon" variant="ghost" className={'flex  gap-1'}>
                      <MessageCircleIcon className="h-4 w-4" />
                      <span className="sr-only">Comment</span>
                      <span className={'text-sm'}>{post.comment}</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className={'border-none bg-transparent max-w-[600px]'}>
                    <Comments comments={post.comments} userId={userId} postId={post.id} name={name} username={username} img={img} />
                  </DialogContent>
                </Dialog>
                <Button size="icon" variant="ghost" className={'flex gap-1'}>
                  <ViewIcon className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                  <span className={'text-sm'}>{post.view}</span>
                </Button>
                <div className="text-xs">{timeAgo(post.createdAt)}</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
