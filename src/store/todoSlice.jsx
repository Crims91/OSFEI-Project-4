import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    activeFilter: "all",
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeDoneTasks(state) {
      state.todos = state.todos.filter((todo) => todo.category !== "done");
    },
    removeAllTasks(state) {
      state.todos = [];
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
  removeDoneTasks,
  removeAllTasks,
} = todoSlice.actions;
export default todoSlice.reducer;
