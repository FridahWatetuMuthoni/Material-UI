import image1 from "../assets/img-5.jpg";
import image2 from "../assets/img-6.png";
import image3 from "../assets/img-7.jpg";
import image4 from "../assets/img-8.jpg";
import image5 from "../assets/img-9.jpg";
import image6 from "../assets/img-10.jpg";
import image7 from "../assets/img-11.jpg";
import image8 from "../assets/img-12.png";
import data from "../data";

import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

function RightBar() {
  return (
    <Box
      p={2}
      flex={2}
      sx={{
        display: { xs: "none", md: "block" },
      }}
      width={300}
    >
      <Box>
        <Typography
          variant="h6"
          fontWeight="100"
          mb={2}
          mt={2}
          sx={{ textAlign: "center" }}
        >
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={image1} />
          <Avatar alt="Travis Howard" src={image2} />
          <Avatar alt="Cindy Baker" src={image3} />
          <Avatar alt="Agnes Walker" src={image4} />
          <Avatar alt="Trevor Henderson" src={image5} />
          <Avatar alt="Trevor Henderson" src={image6} />
          <Avatar alt="Trevor Henderson" src={image7} />
          <Avatar alt="Trevor Henderson" src={image8} />
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight="100"
          mt={2}
          mb={2}
          sx={{ textAlign: "center" }}
        >
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {data.map((item) => (
            <ImageListItem key={item.title}>
              <img
                src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography
          variant="h6"
          fontWeight="100"
          mt={2}
          mb={2}
          sx={{ textAlign: "center" }}
        >
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={image1} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={image2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={image3} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
