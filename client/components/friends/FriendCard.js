import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActionArea,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";

const FriendCard = ({ user }) => {
  return (
    <Card
      elevation={3}
      style={{
        color: "black",
        padding: 10,
        marginLeft: 20,
        width: 200,
        height: 200,
      }}
    >
      <CardActionArea>
        <Link to={`/friends/${user.id}`}>
          <CardMedia
            src={user.imageUrl}
            component="img"
            height="150"
            width="150"
            sx={{ padding: "1em 1em 0 1em" }}
          />
          <Typography align="center" style={{ overflowWrap: "break-word" }}>
            {user.firstName + " " + user.lastName}
          </Typography>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add Friend
        </Button>
      </CardActions>
    </Card>
  );
};

export default FriendCard;
