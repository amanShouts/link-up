import { prisma } from '../model';

export async function isUserFollowByUsername(
  username: string,
  followerUsername: string,
) {
  const result = await prisma.follower.findFirst({
    where: {
      username: username,
      followerUsername: followerUsername,
    },
  });
  if (result) return true;
  return false;
}

export async function followUserByUsername(
  username: string,
  followerUsername: string,
) {
  await prisma.follower.create({
    data: {
      username: username,
      followerUsername: followerUsername,
    },
  });
}

export async function unfollowUserByUsername(
  username: string,
  followerUsername: string,
) {
  await prisma.follower.deleteMany({
    where: {
      username: username,
      followerUsername: followerUsername,
    },
  });
}

export async function getUserFollowingByUserId(userId: number) {
  const result = await prisma.follower.findMany({
    where: {
      User: {
        id: userId,
      },
    },
    select: {
      User: {
        select: {
          id: true,
          name: true,
          username: true,
          img: true,
        },
      },
      Follower: {
        select: {
          name: true,
          username: true,
          img: true,
          id: true,
        },
      },
    },
  });
  return result;
}

export async function getUserFollowerByUserId(userId: number) {
  const result = await prisma.follower.findMany({
    where: {
      Follower: {
        id: userId,
      },
    },
    select: {
      User: {
        select: {
          id: true,
          name: true,
          username: true,
          img: true,
        },
      },
      Follower: {
        select: {
          name: true,
          username: true,
          img: true,
          id: true,
        },
      },
    },
  });
  return result;
}
