import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { setFriends } from '../../store';
import FriendCard from './FriendCard';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '.25rem',
    width: '80%',
  },
  title: {
    color: 'white',
  },
});

const MyFriendsList = ({ userId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const { friends } = useSelector(state => state);

  useEffect(() => {
    dispatch(setFriends(userId));
  }, []);

  // Filter friends
  const [state, setstate] = useState({
    query: '',
    list: [],
  });

  const handleChange = e => {
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
      <Typography
        className={classes.title}
        align="center"
        variant="h3"
        component="h1"
        gutterBottom
      >
        Find Friends
      </Typography>

      <Grid className={classes.search}>
        <TextField
          variant="filled"
          className={classes.input}
          value={state.query}
          type="search"
          label="Name"
          onChange={handleChange}
        ></TextField>
      </Grid>

      <Grid container spacing={2}>
        {state.query === ''
          ? friends
              ?.filter(friend => friend.friendInd === 'Y')
              .map(friend => {
                return (
                  <Grid item key={friend.id} xs={12} sm={12} md={6}>
                    <FriendCard key={friend.id} friend={friend} />
                  </Grid>
                );
              })
          : state.list
              ?.filter(friend => friend.friendInd === 'Y')
              .map(friend => {
                return (
                  <Grid item key={friend.id} xs={12} sm={12} md={6}>
                    <FriendCard key={friend.id} friend={friend} />
                  </Grid>
                );
              })}
      </Grid>
    </Container>
  );
};

export default MyFriendsList;
