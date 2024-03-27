import Post from "./Post";
import { Box } from "@mui/material";
import data from "../data";

function Feed() {
  return (
    <Box flex={4} p={2}>
      {data.map((item) => {
        return <Post key={item.title} item={item} />;
      })}
    </Box>
  );
}

export default Feed;
