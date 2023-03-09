import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store';

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

const UpdateUser = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [bio, setBio] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: user.id,
        // username: userName,
        // password: password,
        // firstName: firstName,
        // lastName: lastName,
        // age: age,
        // location: location,
        bio: bio,
      })
    );
    console.log('user account updated');
  };

  return (
    <>
      <Container>
        <Typography variant="h6">Update Bio</Typography>
        {/* <Grid> */}
        <Grid item xs={12} sm={8} md={6}>
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* <TextField
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
            /> */}
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

export default UpdateUser;
