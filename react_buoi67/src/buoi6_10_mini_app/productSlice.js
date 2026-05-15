import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call (in real app, would be actual API)
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Gaming Laptop', price: 1299, category: 'Electronics', image: '💻' },
            { id: 2, name: 'Mechanical Keyboard', price: 149, category: 'Peripherals', image: '⌨️' },
            { id: 3, name: 'Wireless Mouse', price: 79, category: 'Peripherals', image: '🖱️' },
            { id: 4, name: 'Monitor 4K', price: 599, category: 'Electronics', image: '🖥️' },
            { id: 5, name: 'USB-C Hub', price: 49, category: 'Accessories', image: '🔌' },
            { id: 6, name: 'Cooling Pad', price: 69, category: 'Accessories', image: '❄️' },
          ]);
        }, 1500);
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
