import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/todoSlice";
import { setCurrentModalId, toggleModalOpen } from "../../store/modalSlice";

const TodoItem = ({ id, text, done }) => {
  const dispatch = useDispatch();
  const isChecked = done || false;

  // Checks if the todo is done and changes the style
  const completedStyles = done
    ? {
        textDecoration: "line-through",
        color: "grey",
      }
    : {};

  return (
    <ListItem
      sx={{ padding: 0, borderBottom: "1px solid grey" }}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox
            checked={isChecked}
            label="end"
            sx={{ marginRight: "auto" }}
            onClick={() => dispatch(toggleTodo(id))}
          />
        </ListItemIcon>
        <ListItemText primary={text} sx={completedStyles} />
        <ListItemIcon>
          <EditIcon
            onClick={() => {
              dispatch(setCurrentModalId(id));
              dispatch(toggleModalOpen(true));
            }}
            label="end"
            sx={{ marginRight: "auto", marginLeft: "auto" }}
          />
        </ListItemIcon>
        <ListItemIcon>
          <DeleteIcon
            onClick={() => dispatch(removeTodo())}
            label="end"
            sx={{ marginRight: "auto ", marginLeft: "auto" }}
          />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
