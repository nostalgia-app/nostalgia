import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendCard from "./FriendCard";
import { fetchUsers } from "../../store";
import { Container, Typography, Grid } from "@material-ui/core";

const FriendList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users } = useSelector((state) => state.user);
  const { auth } = useSelector((state) => state);

  if (auth.id) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(auth.id);

  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find a Friend
      </Typography>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {users.map((user) => {
          return <FriendCard user={user} />;
        })}
      </Grid>
    </Container>
  );
};

export default FriendList;
