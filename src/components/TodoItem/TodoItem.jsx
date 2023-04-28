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
import { removeTodo, updateTaskCategory } from "../../store/todoSlice";
import { setCurrentModalId, toggleModalOpen } from "../../store/modalSlice";

const TodoItem = ({ item }) => {
  const { id, text, category } = item;
  const dispatch = useDispatch();

  const completedStyles =
    category === "done"
      ? { color: "grey", textDecoration: "line-through" }
      : {};

  return (
    <ListItem
      sx={{ padding: 0, borderBottom: "1px solid grey" }}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox
            label="end"
            sx={{ marginRight: "auto" }}
            checked={category === "done"}
            onClick={() => dispatch(updateTaskCategory(id))}
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
            onClick={() => dispatch(removeTodo(id))}
            label="end"
            sx={{ marginRight: "auto ", marginLeft: "auto" }}
          />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
