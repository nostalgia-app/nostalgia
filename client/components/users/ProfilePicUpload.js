import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProfilePic, updateUser } from '../../store';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button, Grid } from '@material-ui/core';

const ProfilePicUpload = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('fileName', file.name);
    data.append('userId', user.id);
    // added the user.id to note /${userId}/ profilePic
    dispatch(createProfilePic(data, user.id));
    dispatch(updateUser({ id: user.id, profilePic: file.name }));
    history.push(`/users/${user.id}`);
  };
  return (
    <>
      <Grid
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            border: '2pt solid blue',
            borderRadius: '.5rem',
            padding: 30,
            margin: 20,
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Profile pic upload.
          </Typography>
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
            Upload
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default ProfilePicUpload;
