import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 0, text: "Learn React", done: false },
      { id: 1, text: "Make awesome App", done: true },
      { id: 2, text: "Have a nice day", done: false },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },

    editTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.text = action.payload.text;
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
      console.log("toggleTodo", todo);
    },
    removeTodo: (state, action) => {
      const filteredList = state.todos.filter(
        (item) => item.id !== action.payload
      );
      state.todos = filteredList;
    },
  },
});

export const {
  showLog,
  getAllTodos,
  getTodoById,
  addTodo,
  editTodo,
  toggleTodo,
  removeTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
