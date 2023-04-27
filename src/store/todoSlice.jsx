import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 0, text: "Learn React", category: "todo" },
      { id: 1, text: "Make awesome App", category: "todo" },
      { id: 2, text: "Have a nice day", category: "todo" },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.text = action.payload.text;
    },
    changeFilter(state, action) {
      state.activeFilter = action.payload;
    },
    updateTaskCategory: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            category: item.category === "todo" ? "done" : "todo",
          };
        }
        return item;
      });
    },
  },
});

export const {
  addTodo,
  editTodo,
  removeTodo,
  changeFilter,
  updateTaskCategory,
} = todoSlice.actions;
export default todoSlice.reducer;
