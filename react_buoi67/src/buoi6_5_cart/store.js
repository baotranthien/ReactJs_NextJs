import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store5 = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
