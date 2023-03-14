import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store';

import { Button, Container, Typography, Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const UpdateUser = ({ user }) => {
  const dispatch = useDispatch();

  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: user.id,
        age: age,
        location: location,
        bio: bio,
      })
    );
    console.log('user account updated');
    window.location.reload();
  };

  return (
    <>
      <Container>
        <Typography variant="h6">Update Account</Typography>
        {/* <Grid> */}
        <Grid item xs={12} sm={8} md={6}>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
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
              Update
            </Button>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default UpdateUser;
