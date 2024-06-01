import { prisma } from "./index";

export const getPosts = async (userId: string) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
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
        comments: true,
      },
    });
    console.log(posts);
    // check if user liked the post
    const postsWithLiked = posts.map((post) => ({
      ...post,
      liked: post.likedBy.some((user) => user.userId === parseInt(userId)),
    }));

    return postsWithLiked;
  } catch (error) {
    throw new Error("Error fetching posts");
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
    throw new Error("Error liking post");
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
    throw new Error("Error unliking post");
  }
};
