import { useDispatch, useSelector } from "react-redux";
import { useState, createContext } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import { Wrapper } from "./App.styles";
import { addTodo, editTodo } from "../../store/todoSlice";
import { v4 } from "uuid";

export const AppContext = createContext({});

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputEditValue, setInputEditValue] = useState("");
  const [editId, setEditId] = useState("");
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  /* 
  Add new todo item
  We set all previous todos values and one new element with current input.
  This is a rule of React - do not mutate state directly, only return new state. 
  */
  const addTodoItem = () => {
    if (inputValue.length) {
      dispatch(addTodo({ id: v4(), text: inputValue }));
      setInputValue("");
    }
  };

  const onEditTodo = () => {
    if (inputEditValue.length) {
      dispatch(editTodo({ editId, inputEditValue }));

      setOpen(false);
      setInputEditValue("");
    }
  };

  // Filter todo items
  const onFilter = (filter) => setFilter(filter);
  // Change state of input value
  const onInputChange = (event) => setInputValue(event.target.value);

  const onEditInputChange = (event) => setInputEditValue(event.target.value);

  const onToggleModal = (show) => setOpen(show);

  const onEnter = (event, callback) =>
    event.key === "Enter" ? callback() : null;

  const idPassHandler = (id) => setEditId(id);
  return (
    // AppContext.Provider passes value to all children components
    <AppContext.Provider
      value={{
        inputValue,
        onInputChange,
        addTodoItem,
        onFilter,
        idPassHandler,
        open,
        onToggleModal,
        inputEditValue,
        onEditInputChange,
        onEditTodo,
      }}
    >
      <Wrapper>
        <TodoInput
          // On key press enter add new todo item
          onKeyPress={(event) => onEnter(event, addTodoItem)}
        />
        <TodoList
          /*
          We pass an already filtered array to be able to display only those elements of the array that passed the filter. 
          This way we keep the original array of data.
          */
          todos={todos.filter((todoItem) => {
            if (filter === "done") {
              return todoItem.done;
            } else if (filter === "undone") {
              return !todoItem.done;
            }
            return true;
          })}
        />
        <Modal />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default App;
