import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  CardActionArea,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import { addFriend, deleteFriend } from "../../store";

const FriendCard = ({ friend }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleAddClick = (userId, friendId) => {
    dispatch(addFriend({ userId: userId, friendId: friendId }));
  };

  const handleRemovelick = (userFriendId) => {
    dispatch(deleteFriend(userFriendId));
  };

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
        <Link to={`/friends/${friend.id}`}>
          <CardMedia
            src={friend.imageUrl}
            component="img"
            height="140"
            width="140"
            sx={{ padding: "1em 1em 0 1em" }}
          />
          <Typography align="center" style={{ overflowWrap: "break-word" }}>
            {friend.firstName + " " + friend.lastName}
          </Typography>
        </Link>
      </CardActionArea>
      <CardActions>
        {friend.friendInd === "Y" ? (
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => handleRemovelick(friend.userFriendId)}
          >
            Remove Friend
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => handleAddClick(auth.id, friend.id)}
          >
            Add Friend
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default FriendCard;
