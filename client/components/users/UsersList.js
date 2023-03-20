import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import { fetchUsers } from '../../store';
import { Container, Typography, Grid } from '@material-ui/core';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users } = useSelector(state => state.user);

  return (
    // Page is wrapp in a container - clean spacing
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        User List
      </Typography>

      <Grid container spacing={2}>
        {users.map(user => {
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
