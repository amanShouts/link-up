import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    type: ""
  },
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
    modalDetails: ( state, action ) => {
      state.type = action.payload;
    }
  }
});

export const { openModal, closeModal, modalDetails } = modalSlice.actions;
export default modalSlice.reducer;