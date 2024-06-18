import express, { Request, Response } from 'express';
import {
  followUser,
  getUserFollower,
  getUserFollowing,
  isUserFollow,
  unfollowUser,
} from '../controllers/followController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'On Follow route',
  });
});

router.post('/isFollow', isUserFollow);

router.post('/follower', getUserFollower);

router.post('/following', getUserFollowing);

router.post('/', followUser);

router.put('/', unfollowUser);

export default router;
