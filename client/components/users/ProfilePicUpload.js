import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProfilePic, updateUser } from '../../store';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderLeft: '2pt solid red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '.25rem',
  },
  button: {
    backgroundColor: '#1f2833',
    border: '2pt solid #66FCf1',
    marginTop: 5,
    color: 'white',
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
    <Container className={classes.mainContainer}>
      <Grid>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Profile pic upload.
          </Typography>
          <TextField
            className={classes.input}
            type="file"
            accept=".jpg, .jpeg, .png"
            variant="outlined"
            onChange={e => {
              const file = e.target.files[0];
              setFile(file);
            }}
          />

          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Upload
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default ProfilePicUpload;
