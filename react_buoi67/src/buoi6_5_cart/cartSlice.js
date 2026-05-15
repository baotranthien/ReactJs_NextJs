import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      { id: 1, name: 'Laptop', price: 999, quantity: 1 },
      { id: 2, name: 'Mouse', price: 25, quantity: 2 },
    ],
    nextId: 3,
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, price } = action.payload;
      const existing = state.items.find((item) => item.name === name);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: state.nextId,
          name,
          price,
          quantity: 1,
        });
        state.nextId += 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
