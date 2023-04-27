import MainButton from "../Button/Button";
import TodoItem from "../TodoItem/TodoItem";
import { StyledWrapper, TodoListHeading, StyledList } from "./TodoList.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  removeDoneTasks,
  removeAllTasks,
} from "../../store/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => {
    return state.todos.todos;
  });

  const currentFilter = useSelector((state) => {
    return state.todos.activeFilter;
  });

  const handleChangeFilter = (filter) => {
    dispatch(changeFilter(filter));
  };
  // Check if there are no todos to display delete buttons
  const displayDeleteButtons = !todos.length ? "none" : "";

  return (
    <div>
      <TodoListHeading>Todo List</TodoListHeading>

      {/* Filter buttons */}
      <StyledWrapper>
        <MainButton
          title={"All"}
          width={180}
          bgColor={"#597e90"}
          onClick={() => handleChangeFilter("all")}
        />
        <MainButton
          title={"Done"}
          width={180}
          bgColor={"#4caf50"}
          onClick={() => handleChangeFilter("done")}
        />
        <MainButton
          title={"Todo"}
          width={180}
          bgColor={"#4559ca"}
          onClick={() => handleChangeFilter("todo")}
        />
      </StyledWrapper>

      {/* Todo list */}
      <StyledList>
        {todos.map((item) => {
          if (item.category === currentFilter || currentFilter === "all") {
            return <TodoItem key={item.id} item={item} />;
          }
          return null;
        })}
      </StyledList>
      {/* Delete buttons */}
      <StyledWrapper>
        <MainButton
          title={"Delete Done Tasks"}
          width={230}
          bgColor={"#27782a"}
          display={displayDeleteButtons}
          delete="done"
          onClick={() => dispatch(removeDoneTasks())}
        />
        <MainButton
          title={"Delete All Tasks"}
          width={230}
          bgColor={"#d32f2f"}
          display={displayDeleteButtons}
          delete="all"
          onClick={() => dispatch(removeAllTasks())}
        />
      </StyledWrapper>
    </div>
  );
};

export default TodoList;
