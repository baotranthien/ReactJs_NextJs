import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store4 = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
