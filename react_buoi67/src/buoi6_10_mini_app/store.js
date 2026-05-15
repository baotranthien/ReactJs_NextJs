import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import notificationReducer from './notificationSlice';

export const store10 = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    cart: cartReducer,
    notifications: notificationReducer,
  },
});
