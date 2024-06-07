import { Card } from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Comment } from '@/components/home/comment.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '@/config.ts';

export type commentType = {
  id: number;
  user: {
    name: string;
    img: string;
    username: string;
  };
  createdAt: Date;
  commentContent: string;
};

export function Comments({ comments, userId, postId, name, img, username }: { comments: commentType[]; userId: number; postId: number; name: string; img: string; username: string }) {
  const [comment, setComment] = useState<string>('');
  const [commentList, setCommentList] = useState<commentType[]>([]);

  useEffect(() => {
    setCommentList(comments);
  }, []);

  const generateRandomInteger = () => {
    return Math.floor(Math.random() * 10000000000) + 1;
  };

  async function commentHandler() {
    const id = toast.loading('Posting comment....');
    try {
      await axios.post(`${BACKEND_URL}/api/comment/create`, {
        commentContent: comment,
        userId: userId,
        postId: postId,
      });
      toast.success('Comment posted', { id });
      setCommentList((prevComment) => [
        {
          id: generateRandomInteger(),
          user: { name: name, username: username, img: img },
          createdAt: new Date(),
          commentContent: comment,
        },
        ...prevComment,
      ]);
    } catch (error) {
      toast.error('Error posting comment', { id });
      console.log(error);
    }
  }

  return (
    <div>
      <Card className="rounded-2xl space-y-4 p-4  dark:border-neutral-700 dark:shadow-none shadow-[0px_0px_20px_1px] ">
        <div className={'flex flex-col gap-2'}>
          <Input value={comment} onChange={(e) => setComment(e.target.value)} placeholder={'Write some comment...'} className={'border-neutral-600'} />
          <Button onClick={() => commentHandler()} className={'flex items-center justify-center bg-blue-400 text-black w-fit h-fit py-2 mt-2 px-6 self-end'}>
            Post
          </Button>
        </div>

        <p className={'text-sm dark:text-neutral-200 ml-4  w-fit'}>All Comments</p>
        <hr className={'dark:border-neutral-700'} />

        {commentList.length == 0 ? (
          <p className={'text-sm px-3 text-neutral-500'}>No comments yet</p>
        ) : (
          commentList.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })
        )}
      </Card>
    </div>
  );
}
