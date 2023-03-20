import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProfilePic, updateUser } from '../../store';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  TextField,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
  },
  form: {
    padding: 20,
    margin: 10,
    marginLeft: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
});

const ProfilePicUpload = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('fileName', file.name);
    data.append('userId', user.id);
    dispatch(createProfilePic(data, user.id));
    dispatch(updateUser({ id: user.id, profilePic: file.name }));
    history.push(`/users/${user.id}`);
  };
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
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
          }}
        />

        <Button type="submit" variant="contained" color="primary">
          Upload
        </Button>
      </form>
    </>
  );
};

export default ProfilePicUpload;
