import { Request, Response } from 'express';
import {
  followUserByUsername,
  getUserFollowerByUserId,
  getUserFollowingByUserId,
  isUserFollowByUsername,
  unfollowUserByUsername,
} from '../model/follow';
import { UserFollowData } from '../utiles/type';

export async function getUserFollowing(req: Request, res: Response) {
  try {
    const {
      userId,
    }: {
      userId: string | null;
    } = req.body;
    let id = parseInt(userId || '');
    if (!id)
      return res.status(404).json({
        msg: 'Invalid input',
      });
    const result = await getUserFollowingByUserId(id);
    if (!result.length) {
      return res.json({
        follower: null,
      });
    }
    const body: UserFollowData = {
      id: result[0].User.id,
      name: result[0].User.name,
      username: result[0].User.username,
      imgSrc: result[0].User.img || '',
      follow: result.map((each) => {
        return {
          userId: each.Follower.id,
          name: each.Follower.name,
          username: each.Follower.username,
          imgSrc: each.Follower.img || '',
        };
      }),
    };

    return res.json({
      following: body,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Internal server error',
    });
  }
}

export async function getUserFollower(req: Request, res: Response) {
  try {
    const {
      userId,
    }: {
      userId: string | null;
    } = req.body;
    let id = parseInt(userId || '');
    if (!id)
      return res.status(404).json({
        msg: 'Invalid input',
      });

    const result = await getUserFollowerByUserId(id);
    if (!result.length) {
      return res.json({
        following: null,
      });
    }
    const body: UserFollowData = {
      id: result[0].Follower.id,
      name: result[0].Follower.name,
      username: result[0].Follower.username,
      imgSrc: result[0].Follower.img || '',
      follow: result.map((each) => {
        return {
          userId: each.User.id,
          name: each.User.name,
          username: each.User.username,
          imgSrc: each.User.img || '',
        };
      }),
    };

    return res.json({
      follower: body,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Internal server error',
    });
  }
}

export async function isUserFollow(req: Request, res: Response) {
  try {
    const {
      currUser,
      followerUsername,
    }: { currUser: string | null; followerUsername: string | null } = req.body;
    if (!currUser || !followerUsername)
      return res.status(404).json({
        msg: 'Invalid input',
      });

    const result = await isUserFollowByUsername(currUser, followerUsername);

    return res.json({
      isFollow: result ? true : false,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Internal server error',
    });
  }
}

export async function followUser(req: Request, res: Response) {
  try {
    const {
      username,
      followerUsername,
    }: { username: string | null; followerUsername: string | null } = req.body;
    if (!username || !followerUsername)
      return res.status(404).json({
        msg: 'Invalid input',
      });

    await followUserByUsername(username, followerUsername);

    return res.json({
      msg: 'user followed',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Internal server error',
    });
  }
}

export async function unfollowUser(req: Request, res: Response) {
  try {
    const {
      username,
      followerUsername,
    }: { username: string | null; followerUsername: string | null } = req.body;
    if (!username || !followerUsername)
      return res.status(404).json({
        msg: 'Invalid input',
      });

    await unfollowUserByUsername(username, followerUsername);
    return res.json({
      msg: 'user unfollowed',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Internal server error',
    });
  }
}
