import { prisma } from "./index";

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            name: true,
            img: true,
            username: true,
          },
        },
        label: true,
        comments: true,
      },
    });
    return posts;
  } catch (error) {
    throw new Error("Error fetching posts");
  }
};
