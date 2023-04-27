import Button from "@mui/material/Button";
import { darken } from "@mui/material";

const MainButton = ({ title, width, bgColor, onClick, display }) => {
  return (
    <Button
      sx={{
        display: display,
        width: { width },
        mt: 2,
        backgroundColor: bgColor,
        "&:hover": { backgroundColor: darken(bgColor, 0.2) },
      }}
      variant="contained"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default MainButton;
