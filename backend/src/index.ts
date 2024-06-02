import express from 'express';
import dotenv from 'dotenv';
import {
  getAllUsersRoute,
  getSingleUser,
  onboardingRoute,
  saveUserRoute,
  updateUserIndustriesRoute,
  updateUserSkillsRoute,
} from './routes/userRoutes';
import bodyParser from 'body-parser';
import mentorRoutes from './routes/mentorRoutes';
import { getUserProfile } from './controllers/userController';
import {
  countViewRoute,
  createPostRoute,
  getAllPostRoute,
  likePostRoute,
  unlikePostRoute,
} from './routes/postRoute';

const cors = require('cors');
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json({ limit: "150mb" }));
app.use(bodyParser.urlencoded({ limit: "150mb", extended: true }));
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    msg: 'Server is fine',
  });
});

app.use('/api/mentor', mentorRoutes);
app.use('/api/onboarding', onboardingRoute);

app.use('/api/profile/:username', getUserProfile);
// /users
app.use(getAllUsersRoute);

// get single user
app.use('/api/user', getSingleUser);

// get all posts
app.use('/api/posts', getAllPostRoute);

// like a single post
app.use('/api/post', likePostRoute);

// unlike a single post
app.use('/api/post', unlikePostRoute);

// create a single post
app.use("/api/post", createPostRoute);

// counting views on a post
app.use("/api/post", countViewRoute);

// save-user
app.use(saveUserRoute);

//edit-user
app.use(onboardingRoute);

// skills
app.use(updateUserSkillsRoute);

// industries
app.use(updateUserIndustriesRoute);

app.listen(PORT, () => {
  console.log('Server running on port ', PORT);
});
