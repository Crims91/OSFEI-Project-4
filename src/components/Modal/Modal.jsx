import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MainButton from "../Button/Button";
import { StyledTextField } from "../TodoInput/TodoInput.styles";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../store/todoSlice";
import { toggleModalOpen } from "../../store/modalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const currentModalId = useSelector((state) => state.modal.currentModalId);

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
        <Box sx={style}>
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
            callback={handleEdit}
          />
        </Box>
      </Modal>
    </div>
  );
}
