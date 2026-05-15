import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

export const store2 = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
