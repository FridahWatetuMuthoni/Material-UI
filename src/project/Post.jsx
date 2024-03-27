import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function Post(props) {
  const { item } = props;
  return (
    <Card sx={{ margin: { xs: 1, lg: 5 } }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {item.initial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={item.title}
        subheader={item.date}
      />
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

Post.propTypes = {
  item: PropTypes.object,
};

export default Post;
