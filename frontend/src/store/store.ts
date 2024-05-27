import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import usersReducer from './slice/userSlice';

export const store = configureStore({
  reducer:  {
    counter: counterReducer,
    users: usersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;