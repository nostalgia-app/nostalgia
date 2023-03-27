import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FriendCard from './FriendCard';
import { setFriends } from '../../store';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Box,
  FormControl,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    height: '100%',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '.25rem',
    width: '30%',
  },
  friendsContainer: {
    marginTop: 30,
  },
  search: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
  },
});

const FriendsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const { friends } = useSelector(state => state);

  useEffect(() => {
    dispatch(setFriends(auth.id));
  }, [auth]);

  // Filter friends
  const [state, setstate] = useState({
    query: '',
    list: [],
  });

  const handleChange = e => {
    console.log(e.target.value, state.query);
    const results = friends.filter(friend => {
      if (e.target.value === '') return friends;
      return friend.firstName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <Container className={classes.container}>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find Friends
      </Typography>
      <Grid className={classes.search}>
        <FormControl fullWidth>
          <TextField
            className={classes.input}
            margin="normal"
            value={state.query}
            type="search"
            label="Name"
            onChange={handleChange}
          ></TextField>
        </FormControl>
      </Grid>
      <Grid container spacing={2}>
        {state.query === ''
          ? friends?.map(friend => {
              return (
                <Grid item key={friend.id} xs={12} sm={6} md={3}>
                  <FriendCard key={friend.id} friend={friend} />
                </Grid>
              );
            })
          : state.list?.map(friend => {
              return (
                <Grid item key={friend.id} xs={12} sm={6} md={3}>
                  <FriendCard key={friend.id} friend={friend} />
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
};

export default FriendsList;
