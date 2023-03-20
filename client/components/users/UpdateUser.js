import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUser } from '../../store';
import { useParams } from 'react-router-dom';
import DialogBox from './DialogueBox';
import ProfilePicUpload from './ProfilePicUpload';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';

const UpdateUser = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);
  const { user } = useSelector(state => state.user);

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
    history.push(`/users/${user.id}/details`);
  };

  return (
    <>
      <Grid style={{ border: '2pt solid green', display: 'flex' }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
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
