import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendCard from "./FriendCard";
import { fetchUsers } from "../../store";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";

const FriendList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users } = useSelector((state) => state.user);
  const { auth } = useSelector((state) => state);

  // Filter friends
  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = users.filter((user) => {
      if (e.target.value === "") return users;
      return user.firstName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
    console.log(state.query, state.list);
  };

  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find a Friend
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
          ? users.map((user) => {
              return (
                <Grid item zeroMinWidth key={user.id}>
                  <FriendCard key={user.id} user={user} />
                </Grid>
              );
            })
          : state.list.map((user) => {
              return (
                <Grid item zeroMinWidth key={user.id}>
                  <FriendCard key={user.id} user={user} />
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
};

export default FriendList;
