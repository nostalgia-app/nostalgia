import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../store';

import {
  Button,
  Container,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const CreateUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      createNewUser({
        username: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        age: age,
        location: location,
        bio: bio,
      })
    );
    console.log('new user created');
  };

  return (
    <>
      <Container style={{ margin: '10px' }}>
        <Typography variant="h3">Create Account</Typography>
        <Grid item xs={12} sm={8} md={6}>
          <form className={classes.form} onSubmit={handleSubmit}>
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
              onChange={e => setAge(e.target.value)}
              label="Age"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={e => setLocation(e.target.value)}
              label="Location"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={e => setBio(e.target.value)}
              label="Bio"
              margin="normal"
              variant="outlined"
              multiline
              rows={5}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default CreateUser;
