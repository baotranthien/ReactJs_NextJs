import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('miniAppUser')) || null,
    isLoggedIn: !!localStorage.getItem('miniAppUser'),
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('miniAppUser', JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('miniAppUser');
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
