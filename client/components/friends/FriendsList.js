import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendCard from "./FriendCard";
import { fetchUsers, setFriends } from "../../store";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Box,
  FormControl,
} from "@material-ui/core";

const FriendsList = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { friends } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    dispatch(setFriends(auth.id));
  }, [auth]);

  // Filter friends
  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = friends.filter((friend) => {
      if (e.target.value === "") return friends;
      return friends.firstName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find Friends
      </Typography>

      <Box sx={{ minWidth: 200, mt: 10, mb: 10 }}>
        <FormControl fullWidth>
          <TextField
            value={state.query}
            type="search"
            label="Name"
            onChange={handleChange}
          ></TextField>
        </FormControl>
      </Box>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {state.query === ""
          ? friends
              ?.filter((friend) => friend.id !== auth.id)
              .map((friend) => {
                return (
                  <Grid item zeroMinWidth key={friend.id}>
                    <FriendCard key={friend.id} friend={friend} />
                  </Grid>
                );
              })
          : state.list
              ?.filter((friend) => friend.id !== auth.id)
              .map((friend) => {
                return (
                  <Grid item zeroMinWidth key={friend.id}>
                    <FriendCard key={friend.id} friend={friend} />
                  </Grid>
                );
              })}
      </Grid>
    </Container>
  );
};

export default FriendsList;
