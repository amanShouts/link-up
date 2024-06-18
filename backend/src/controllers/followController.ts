import { Request, Response } from 'express';
import {
  followUserByUsername,
  getUserFollowerByUsername,
  getUserFollowingByUsername,
  isUserFollowByUsername,
  unfollowUserByUsername,
} from '../model/follow';

export async function getUserFollower(req: Request, res: Response) {
  try {
    const {
      username,
    }: {
      username: string | null;
    } = req.body;
    if (!username)
      return res.status(404).json({
        msg: 'Invalid input',
      });
    const result = await getUserFollowerByUsername(username);
    return res.json({
      follower: result,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Internal server error',
    });
  }
}

export async function getUserFollowing(req: Request, res: Response) {
  try {
    const {
      username,
    }: {
      username: string | null;
    } = req.body;
    if (!username)
      return res.status(404).json({
        msg: 'Invalid input',
      });

    const result = await getUserFollowingByUsername(username);
    return res.json({
      following: result,
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
