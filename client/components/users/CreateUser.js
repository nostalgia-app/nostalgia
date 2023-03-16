import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser, fetchUsers } from '../../store';
import { useHistory } from 'react-router-dom';

import { Button, Typography, Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const CreateUser = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      createNewUser({
        firstName: firstName,
        lastName: lastName,
        username: userName,
        password: password,
      })
    );

    console.log('new user created');
    history.push('/users-success');
  };

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Create An Account
      </Typography>
      <Grid item xs={12} sm={8} md={6}>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            onChange={e => setFirstName(e.target.value)}
            label="First Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            onChange={e => setLastName(e.target.value)}
            label="Last Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            onChange={e => setUserName(e.target.value)}
            label="Username"
            margin="normal"
            variant="outlined"
          />
          <TextField
            onChange={e => setPassword(e.target.value)}
            label="Password"
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default CreateUser;
