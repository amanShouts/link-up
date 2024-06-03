import express from 'express';
import {
  getMentorDetails,
  getMentorList,
} from '../controllers/mentorController';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    msg: 'On Mentor route',
  });
});

router.get('/all', getMentorList);

router.get('/:mentorId', getMentorDetails);

export default router;
