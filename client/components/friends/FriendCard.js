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

const FriendCard = ({ user, friend }) => {
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
        {pathname === "/myfriends" ? (
          <Button
            size="small"
            color="primary"
            onClick={() => handleRemovelick(friend.id)}
          >
            Remove Friend
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => handleAddClick(auth.id, user.id)}
          >
            Add Friend
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default FriendCard;
