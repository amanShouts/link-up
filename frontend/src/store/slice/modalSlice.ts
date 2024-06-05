import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  type: string;
  refresh: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  refresh: false,
  type: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    refreshCalls: (state) => {
      state.refresh = !initialState.refresh;
    },
    modalDetails: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { openModal, closeModal, modalDetails, refreshCalls } = modalSlice.actions;
export default modalSlice.reducer;
