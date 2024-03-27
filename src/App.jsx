import Sidebar from "./project/Sidebar";
import RightBar from "./project/RightBar";
import Feed from "./project/Feed";
import { Box, createTheme, Stack } from "@mui/material";
import Navbar from "./project/Navbar";
import AddPost from "./project/AddPost";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{
            gap: {
              sm: "30px",
              md: "5px",
            },
          }}
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
