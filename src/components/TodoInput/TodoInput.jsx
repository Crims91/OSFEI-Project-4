import {
  StyledBox,
  StyledTextField,
  ListIcon,
  TodoInputHeading,
} from "./TodoInput.styles";
import MainButton from "../Button/Button";
import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../../store/todoSlice";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const addTodoItem = (e) => {
    e.preventDefault();
    if (inputValue.length) {
      dispatch(addTodo({ id: v4(), text: inputValue, category: "todo" }));
      setInputValue("");
    }
  };

  return (
    <form onSubmit={addTodoItem}>
      <StyledBox>
        <TodoInputHeading>Todo Input</TodoInputHeading>
        <StyledTextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          autoFocus
          label="New Todo"
          id="fullWidth"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ListIcon />
              </InputAdornment>
            ),
          }}
        />
        <MainButton
          title="new todo"
          width={560}
          bgColor={"#009688"}
          onClick={addTodoItem}
        />
      </StyledBox>
    </form>
  );
};

export default TodoInput;
