import MainButton from "../Button/Button";
import TodoItem from "../TodoItem/TodoItem";
import { StyledWrapper, TodoListHeading, StyledList } from "./TodoList.styles";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/todoSlice";

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
    console.log(filter, "test 1");
  };
  // Check if there are no todos to display delete buttons
  const displayDeleteButtons = !todos.length ? "none" : "";

  return (
    <div>
      <TodoListHeading>Todo List</TodoListHeading>

      {/* Filter buttons */}
      <StyledWrapper>
        {/* {[
          { title: "All", filter: "all" },
          { title: "Done", filter: "done" },
          { title: "Todo", filter: "todo" },
        ].map(({ title, filter }) => (
          <MainButton
            key={title}
            title={title}
            width={180}
            bgColor={"#009688"}
            onClick={handleChangeFilter(filter)}
          />
        ))} */}
        <MainButton
          title={"All"}
          width={180}
          bgColor={"#009688"}
          onClick={() => handleChangeFilter("all")}
        />
        <MainButton
          title={"Done"}
          width={180}
          bgColor={"#009688"}
          onClick={() => handleChangeFilter("done")}
        />
        <MainButton
          title={"Todo"}
          width={180}
          bgColor={"#009688"}
          onClick={() => handleChangeFilter("todo")}
        />
      </StyledWrapper>

      {/* Todo list */}
      <StyledList>
        {todos.map((item) => {
          if (item.category === currentFilter || currentFilter === "all")
            return <TodoItem key={item.id} item={item} />;
        })}
      </StyledList>
      {/* Delete buttons */}
      <StyledWrapper>
        {[
          { title: "Delete Done Tasks", delete: "done" },
          { title: "Delete All Tasks", delete: "all" },
        ].map(({ title, delete: deleteType }) => (
          <MainButton
            key={title}
            title={title}
            width={230}
            bgColor={"#d32f2f"}
            // callback={() => onRemove(deleteType)}
            display={displayDeleteButtons}
          />
        ))}
      </StyledWrapper>
    </div>
  );
};

export default TodoList;
