import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setMenu: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  setMenu,

} = appSlice.actions;

export default appSlice.reducer;
