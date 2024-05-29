import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    opeModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    }
  }
});

export const { opeModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;