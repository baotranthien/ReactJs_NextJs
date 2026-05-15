import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated API auth
export const loginWithAPI = createAsyncThunk(
  'authAPI/loginWithAPI',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Simulate API call
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email && password) {
            const mockToken = `token_${Date.now()}`;
            resolve({
              email,
              token: mockToken,
              user: { id: 1, email, name: email.split('@')[0] },
            });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1500);
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Simulated protected API call
export const fetchProtectedData = createAsyncThunk(
  'authAPI/fetchProtectedData',
  async (token, { rejectWithValue }) => {
    try {
      if (!token) {
        return rejectWithValue('No token provided');
      }

      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, title: 'Protected Data 1' },
            { id: 2, title: 'Protected Data 2' },
            { id: 3, title: 'Protected Data 3' },
          ]);
        }, 1000);
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authAPISlice = createSlice({
  name: 'authAPI',
  initialState: {
    user: null,
    token: localStorage.getItem('authToken') || null,
    isLoggedIn: !!localStorage.getItem('authToken'),
    loading: false,
    error: null,
    protectedData: [],
    dataLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.protectedData = [];
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginWithAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        localStorage.setItem('authToken', action.payload.token);
        localStorage.setItem('userData', JSON.stringify(action.payload.user));
      })
      .addCase(loginWithAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch protected data
    builder
      .addCase(fetchProtectedData.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchProtectedData.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.protectedData = action.payload;
      })
      .addCase(fetchProtectedData.rejected, (state, action) => {
        state.dataLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authAPISlice.actions;
export default authAPISlice.reducer;
