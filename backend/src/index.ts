import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import {
  getAllUsersRoute,
  getSingleUser,
  getUserId,
  onboardingRoute,
  saveUserRoute,
  updateUserIndustriesRoute,
} from './routes/userRoutes';
import mentorRoutes from './routes/mentorRoutes';
import { getUserProfile } from './controllers/userController';
import {
  countViewRoute,
  createCommentRoute,
  createPostRoute,
  getAllPostRoute,
  likePostRoute,
  unlikePostRoute,
} from './routes/postRoute';
import { updateUserSkillsRoute } from './routes/skillsRoutes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

app.use(bodyParser.json({ limit: '150mb' }));
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

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
app.use('/api/post', createPostRoute);

// counting views on a post
app.use('/api/post', countViewRoute);

// create a comment
app.use('/api/comment', createCommentRoute);

// getting user id from username
app.use('/api/username/:username', getUserId);

// save-user
app.use(saveUserRoute);

// edit-user
app.use(onboardingRoute);

// skills
app.use(updateUserSkillsRoute);

// industries
app.use(updateUserIndustriesRoute);

// socket

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

httpServer.listen(PORT, () => {
  console.log('Server running on port ', PORT);
});
