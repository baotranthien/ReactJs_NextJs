import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
