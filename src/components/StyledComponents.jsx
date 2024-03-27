import { styled } from "@mui/material";
import Button from "@mui/material/Button";

function StyledComponents() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "white",
    margin: "5px",
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  return (
    <div>
      <BlueButton variant="contained">Blue Button</BlueButton>
    </div>
  );
}

export default StyledComponents;
