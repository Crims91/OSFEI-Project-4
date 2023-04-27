import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <TodoInput />
      <TodoList />
      <Modal />
    </Wrapper>
  );
};

export default App;
