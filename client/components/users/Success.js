import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Success = () => {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  //
  const { users } = useSelector(state => state.user);
  console.log(users);
  const newUser = users[users.length - 1];
  if (newUser) {
    console.log(newUser.id);
  }
  return (
    // card is wrapped in container to start - clean spacing
    // always try to use standard card elements: Header, Media, Content
    // card is wrapped in 'Link' to individual details page

    <Container>
      <Typography variant="h2" align="center">
        Success!
      </Typography>
      <Typography variant="h5" align="center">
        Welcome to the Nostalgia community! Please select an option below.
      </Typography>
      Let's give them two options... Once on the Account page they can complete
      all data in account, and also upload an Avatar/profile pic. Can we make
      this an all in one update form?
      <div
        style={{
          backgroundColor: 'rgb(241, 241, 241)',
          borderRadius: '.25rem',
          marginTop: 30,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Link to={`/users/${newUser?.id}`}>
              <Button variant="contained" size="large" color="secondary">
                TAKE ME TO MY ACCOUNT
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/communities">
              <Button variant="contained" size="large" color="secondary">
                I WANT TO EXPLORE COMMUNITIES
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Success;
