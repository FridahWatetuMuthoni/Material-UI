import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SettingsIcon from "@mui/icons-material/Settings";
import { Add } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
function Buttons() {
  return (
    <div>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button startIcon={<SettingsIcon />} color="secondary">
          Two
        </Button>
        <Button endIcon={<Add />} color="success">
          Add New Post
        </Button>
        <Button endIcon={<Add />} color="otherColor">
          Other Color
        </Button>
      </ButtonGroup>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "skyblue",
            color: "#888",
            margin: "5px",
            "&:hover": {
              backgroundColor: "lightblue",
            },
            "&:disabled": {
              backgroundColor: "gray",
              color: "white",
            },
          }}
        >
          My Unique Button
        </Button>
      </Stack>
    </div>
  );
}

export default Buttons;
