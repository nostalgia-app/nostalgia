import React, { useEffect, useState } from "react";
import { setFriends, fetchUsers, addFriend, deleteFriend } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import FriendCard from "./FriendCard";
import { Typography, Grid, Container, TextField } from "@material-ui/core";

const FriendList = () => {
  const dispatch = useDispatch();
  const { auth, users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        My Friends
      </Typography>

      <Grid
        container
        spacing={2}
        style={{
          borderRadius: ".25rem",
          marginTop: 20,
        }}
      >
        {users.length > 0 &&
          users.map((user) => {
            return (
              <Grid item key={user.id} xs={12} md={4}>
                <FriendCard key={friend.id} friend={friend} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default FriendList;
