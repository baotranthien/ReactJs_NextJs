import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

export const store8 = configureStore({
  reducer: {
    search: searchReducer,
  },
});
