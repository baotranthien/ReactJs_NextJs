import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    messages: [],
    nextId: 0,
  },
  reducers: {
    addNotification: (state, action) => {
      state.messages.push({
        id: state.nextId,
        message: action.payload.message,
        type: action.payload.type || 'info',
      });
      state.nextId += 1;
    },
    removeNotification: (state, action) => {
      state.messages = state.messages.filter((msg) => msg.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
