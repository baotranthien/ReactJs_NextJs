import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchUsers = createAsyncThunk(
  'search/searchUsers',
  async (query, { rejectWithValue }) => {
    if (!query) return [];
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?name_like=${query}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
