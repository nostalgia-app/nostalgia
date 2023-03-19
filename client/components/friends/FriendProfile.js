import React, { useEffect } from "react";
import { fetchUser } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";

const FriendProfile = () => {
  let params = useParams();
  const id = params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  const data = useSelector((state) => state.user);
  const user = data.user;

  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Friend Profile
      </Typography>
      <Typography variant="h4" gutterBottom>
        {user.firstName} {user.lastName}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {user.location}
      </Typography>
      <Typography paragraph gutterBottom>
        {user.age} years old
      </Typography>
    </Container>
  );
};

export default FriendProfile;
