import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

export const store7 = configureStore({
  reducer: {
    users: usersReducer,
  },
});
