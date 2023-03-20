import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUser } from '../../store';
import { useParams } from 'react-router-dom';
import ProfilePicUpload from './ProfilePicUpload';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    border: '2pt solid rgb(246, 246, 246)',
    borderRadius: '.25rem',
    marginTop: 10,
  },
  form: {
    padding: 20,
    borderRight: '2pt solid rgb(246, 246, 246)',
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
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
  }, []);

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
    window.location.reload();
  };

  return (
    <>
      <Typography>Account Updates</Typography>
      <Typography>
        <Link to={`/users/${user.id}`}>Back to my profile</Link>
      </Typography>

      <Grid container spacing={2} className={classes.mainContainer}>
        <Grid item xs={12} sm={8} md={8}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Account details</Typography>
            <TextField
              onChange={e => setAge(e.target.value)}
              label="How old are you?"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={e => setLocation(e.target.value)}
              label="In what City and State do you Currently live?"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={e => setBio(e.target.value)}
              label="Tell us a little about yourself. i.e. hobbies, interests, why you joined Nostalgia etc. "
              margin="normal"
              variant="outlined"
              multiline
              rows={5}
            />

            <Button type="submit" variant="contained" color="primary">
              Save Info
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <ProfilePicUpload user={user} />
        </Grid>
      </Grid>
    </>
  );
};

export default UpdateUser;
