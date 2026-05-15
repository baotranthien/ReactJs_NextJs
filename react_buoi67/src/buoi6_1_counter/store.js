import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store1 = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
