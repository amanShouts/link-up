import { prisma } from './index';
import { PostType } from '@prisma/client';

export const getPosts = async (userId: string) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            img: true,
            username: true,
          },
        },
        likedBy: true,
        label: true,
        comments: {
          include: {
            user: {
              select: {
                name: true,
                img: true,
                username: true,
              },
            },
          },
        },
      },
    });
    // check if user liked the post
    const postsWithLiked = posts.map((post) => ({
      ...post,
      liked: post.likedBy.some((user) => user.userId === parseInt(userId)),
    }));

    // if no like post show all post
    if (!postsWithLiked.length) return posts;
    return postsWithLiked; // Else show liked post only
  } catch (error) {
    console.log('inside get post ', error);
    throw new Error('Error fetching posts');
  }
};

// like post
export const likePost = async ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  try {
    const post = await prisma.post.update({
      where: { id: parseInt(postId) },
      data: {
        like: {
          increment: 1,
        },
        likedBy: {
          create: {
            userId: parseInt(userId),
          },
        },
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Error liking post');
  }
};

// unlike post
export const unlikePost = async ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  try {
    const post = await prisma.post.update({
      where: { id: parseInt(postId) },

      data: {
        like: {
          decrement: 1,
        },
        likedBy: {
          deleteMany: {
            userId: parseInt(userId),
            postId: parseInt(postId),
          },
        },
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Error unliking post');
  }
};

// creating a post
export const createPost = async ({
  userId,
  title,
  desc,
  imageLink,
  videoLink,
  resourceLink,
}: {
  userId: string;
  title: string;
  desc: string;
  imageLink?: string;
  videoLink?: string;
  resourceLink?: string;
}) => {
  try {
    let type;
    let post;
    if (imageLink) {
      type = PostType.IMAGE;
      post = await prisma.post.create({
        data: {
          title,
          desc,
          userId: parseInt(userId),
          img: imageLink,
          type,
        },
      });
    } else if (videoLink) {
      type = PostType.VIDEO;
      post = await prisma.post.create({
        data: {
          title,
          desc,
          userId: parseInt(userId),
          video: videoLink,
          type,
        },
      });
    } else if (resourceLink) {
      type = PostType.LINK;
      post = await prisma.post.create({
        data: {
          title,
          desc,
          userId: parseInt(userId),
          link: resourceLink,
          type,
        },
      });
    } else {
      type = PostType.TEXT;
      post = await prisma.post.create({
        data: {
          title,
          desc,
          userId: parseInt(userId),

          type,
        },
      });
    }

    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating post');
  }
};

// counting views on post
export const countViewPost = async ({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) => {
  try {
    // Checking if the user has already viewed the post
    const existingView = await prisma.view.findFirst({
      where: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    });

    if (existingView) {
      return;
    }

    await prisma.view.create({
      data: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    });

    await prisma.post.update({
      where: { id: parseInt(postId) },
      data: {
        view: {
          increment: 1,
        },
      },
    });

    return { message: 'View counted' };
  } catch (error) {
    console.log(error);
    throw new Error('Error counting views');
  }
};

export const createComment = async ({
  postId,
  userId,
  commentContent,
}: {
  postId: string;
  userId: string;
  commentContent: string;
}) => {
  try {
    // increase comment count
    await prisma.post.update({
      where: { id: parseInt(postId) },
      data: {
        comment: {
          increment: 1,
        },
      },
    });

    const comment = await prisma.comment.create({
      data: {
        userId: parseInt(userId),
        postId: parseInt(postId),
        commentContent,
      },
    });

    return comment;
  } catch (error) {
    console.log(error);
    throw new Error('Error commenting');
  }
};
