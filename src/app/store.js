import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../ducks/appSlice';

export default configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
