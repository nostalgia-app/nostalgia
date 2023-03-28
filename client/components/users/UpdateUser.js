import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import ProfilePicUpload from './ProfilePicUpload';
import { updateUser, fetchUser, createProfilePic } from '../../store';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '90vw',
    paddingTop: 50,
  },
  backButton: {
    marginTop: 20,
  },
  updateForm: {
    marginTop: 10,
    width: '60%',
  },
  profilePic: {
    width: '50%',
    marginTop: 30,
    marginBottom: 100,
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

const UpdateUser = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  const { user } = useSelector(state => state.user);

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
  };

  return (
    <>
      <Typography className={classes.backButton}>
        <Link to={`/users/${user.id}`}>Back to my profile</Link>
      </Typography>
      <Container className={classes.container} alignItems="center">
        <Grid className={classes.updateForm}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6" align="center">
              Edit account details
            </Typography>
            <TextField
              className={classes.input}
              onChange={e => setAge(e.target.value)}
              label="How old are you?"
              margin="normal"
              variant="filled"
            />
            <TextField
              className={classes.input}
              onChange={e => setLocation(e.target.value)}
              label="In what City and State do you Currently live?"
              margin="normal"
              variant="filled"
            />
            <TextField
              className={classes.input}
              onChange={e => setBio(e.target.value)}
              label="Tell us a little about yourself. i.e. hobbies, interests, why you joined Nostalgia etc. "
              margin="normal"
              variant="filled"
              multiline
              rows={5}
            />

            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
            >
              Save Account Info
            </Button>
          </form>
        </Grid>

        <Grid className={classes.profilePic}>
          <ProfilePicUpload user={user} />
        </Grid>
      </Container>
    </>
  );
};

export default UpdateUser;
