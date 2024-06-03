const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// getting all the post
const GETTING_ALL_POSTS = BACKEND_URL + '/api/posts';
const GETTING_SINGLE_USER = BACKEND_URL + '/api/user';
const GETTING_MENTOR_LIST = BACKEND_URL + '/api/mentor/all';
const GETTING_USER_ID = BACKEND_URL + '/api/username';

export {
  BACKEND_URL,
  GETTING_ALL_POSTS,
  GETTING_SINGLE_USER,
  GETTING_MENTOR_LIST,
  GETTING_USER_ID,
};
