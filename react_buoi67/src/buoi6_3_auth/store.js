import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store3 = configureStore({
  reducer: {
    auth: authReducer,
  },
});
