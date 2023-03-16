import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import { fetchUsers } from "../../store";
import { Container, Typography, Grid } from "@material-ui/core";

const Users = () => {
  //
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  //
  const { users } = useSelector((state) => state.user);
  const { auth } = useSelector((state) => state);

  if (auth.id) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(auth.id);

  return (
    // Page is wrapp in a container - clean spacing
    <Container>
      {/* Start the actual page content with a basic title */}
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find a Friend
      </Typography>

      {/* Set Grid and Map through the data - use card component to render */}
      <Grid container spacing={2}>
        {users.map((user) => {
          return (
            <Grid item key={user.id} xs={12} md={12}>
              <UserCard user={user} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Users;
