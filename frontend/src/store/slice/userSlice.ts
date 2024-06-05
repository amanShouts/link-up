import { createSlice } from '@reduxjs/toolkit';

export interface User {
  type: null;
  id: number;
  isMentor: boolean;
  userType: string;
  age: number;
  img: string;
  city: string;
  username: string;
  name: string;
  country: string;
  bio: string;
}

interface UsersState {
  users: User[];
  currentUser: User | null;
}

const initialState: UsersState = {
  users: [],
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      state.users = action.payload;
    },
    removeUserDetails: (state) => {
      state.users = [];
    },
    addCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  addUserDetails,
  removeUserDetails,
  addCurrentUser,
  removeCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
