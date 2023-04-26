import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isModalOpen: false, currentModalId: null },
  reducers: {
    setCurrentModalId: (state, action) => {
      state.currentModalId = action.payload;
    },
    toggleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setCurrentModalId, toggleModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
