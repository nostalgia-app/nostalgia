import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import UserCard from './UserCard';
import { fetchUsers } from '../../store';

import {
  Button,
  Container,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const data = useSelector(state => state.user);
  const activeUsers = data.users;
  console.log(activeUsers);

  return (
    <Container>
      <Typography variant="h3">All Users</Typography>
      <Grid>
        {activeUsers.map(user => {
          return (
            <Grid item key={user.id}>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
    // <div className="Users">
    //   <h3>All Users</h3>

    //   <div className="Form">
    //     <form className="searchForm" onSubmit={e => e.preventDefault()}>
    //       <label htmlFor="search"></label>
    //       <input
    //         id="search"
    //         type="text"
    //         placeholder="Search Users"
    //         value={search}
    //         onChange={e => setSearch(e.target.value)}
    //       />
    //     </form>
    //   </div>

    //   <ul>
    //     {searchResults.map(user => (
    //       <UserCard key={user.id} user={user} />
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Users;
