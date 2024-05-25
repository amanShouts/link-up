import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users:[]
  },
  reducers: {
    addUserDetails: ( state, action ) => {
      state.users = action.payload;
    },
    removeUserDetails: ( state ) => {
      state.users  = [];
    }
  }
});


export const { addUserDetails, removeUserDetails } = userSlice.actions;

export default userSlice.reducer;