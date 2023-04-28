import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalStyle from "./Modal.styles";
import MainButton from "../Button/Button";
import { StyledTextField } from "../TodoInput/TodoInput.styles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../store/todoSlice";
import { toggleModalOpen } from "../../store/modalSlice";

export default function BasicModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const currentModalId = useSelector((state) => state.modal.currentModalId);
  const currentTodoText = useSelector((state) => {
    if (state.todos.todos) {
      const currentTodo = state.todos.todos.find(
        (todo) => todo.id === currentModalId
      );
      const text = currentTodo?.text || "";

      return text;
    }
    return "";
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (currentTodoText) {
      setInputValue(currentTodoText);
    }
  }, [currentTodoText]);

  const onEditInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEdit = () => {
    dispatch(editTodo({ id: currentModalId, text: inputValue }));
    setInputValue();
    dispatch(toggleModalOpen(false));
  };
  const onKeyPressEdit = (event) => {
    if (event.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => dispatch(toggleModalOpen(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit todo item
          </Typography>
          <StyledTextField
            value={inputValue}
            onChange={onEditInputChange}
            onKeyPress={onKeyPressEdit}
            fullWidth
            autoFocus
            id="fullWidth"
          />
          <MainButton
            title="Edit"
            width={180}
            bgColor={"#009688"}
            onClick={handleEdit}
          />
        </Box>
      </Modal>
    </div>
  );
}
