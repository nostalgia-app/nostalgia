import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewImage, updateUser } from '../../store';

import { Button, Container, Typography, Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const UpdateUser = ({ user }) => {
  const dispatch = useDispatch();

  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    // primary way
    const data = new FormData();
    data.append('id', user.id);
    data.append('file', file);
    // data.append('profilePic', file);
    // dispatch(updateUser(data));
    dispatch(
      updateUser({
        id: user.id,
        age: age,
        location: location,
        bio: bio,
        // profilePic: file.name,
      })
    );
    dispatch(createNewImage(data));
    console.log('user account updated');
    window.location.reload();
  };

  // modified way
  // first way with all data appended
  // const data = new FormData();
  // data.append('id', user.id);
  // data.append('age', age);
  // data.append('location', location);
  // data.append('bio', bio);
  // data.append('file', file);
  // // data.append('profilePic', file);
  // dispatch(updateUser(data));

  // dispatch(
  //   updateUser({
  //     id: user.id,
  //     age: age,
  //     location: location,
  //     bio: bio,
  //   })
  // );

  return (
    <>
      <Grid>
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
          <TextField
            type="file"
            accept=".jpg, .jpeg, .png"
            variant="outlined"
            onChange={e => {
              const file = e.target.files[0];
              setFile(file);
              console.log(file);
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default UpdateUser;
