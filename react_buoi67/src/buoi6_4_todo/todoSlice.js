import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, text: 'Learn Redux', completed: false },
      { id: 2, text: 'Build Todo App', completed: false },
    ],
    nextId: 3,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: state.nextId,
        text: action.payload,
        completed: false,
      });
      state.nextId += 1;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
