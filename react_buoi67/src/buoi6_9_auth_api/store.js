import { configureStore } from '@reduxjs/toolkit';
import authAPIReducer from './authAPISlice';

export const store9 = configureStore({
  reducer: {
    authAPI: authAPIReducer,
  },
});
