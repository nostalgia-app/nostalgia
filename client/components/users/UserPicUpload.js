import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserPic } from '../../store';
import { TextField, Button, Grid, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const UserPicUpload = ({ userId }) => {
  //
  const dispatch = useDispatch();
  const history = useHistory();

  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    // setId(userId);
    const data = new FormData();
    data.append('file', file);
    data.append('userId', userId);

    dispatch(createProfilePic(data));
    console.log('uploaded');
    history.push(`/users:${userId}`);
  };
  return (
    // Page is wrapped in a container to start - keeps things spaced clean
    <>
      <Grid>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
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

export default UserPicUpload;
