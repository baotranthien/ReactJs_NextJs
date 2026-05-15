import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';

export const store6 = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
});
