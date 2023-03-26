import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUser, createProfilePic } from '../../store';
import { useParams, useHistory } from 'react-router-dom';
// import ProfilePicUpload from './ProfilePicUpload';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    width: '80vw',
    paddingTop: 50,
  },
  // topRow: {
  //   display: 'flex',
  //   borderRadius: '.25rem',
  //   background: '#0a1017c0;',
  //   border: '2pt solid green',
  // },
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
  const history = useHistory();

  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [file, setFile] = useState();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  const { user } = useSelector(state => state.user);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('fileName', file.name);
    data.append('userId', user.id);
    dispatch(
      updateUser({
        id: user.id,
        age: age,
        location: location,
        bio: bio,
        profilePic: file.name,
      })
    );
    createProfilePic(data, user.id);
    history.push(`/users/${user.id}`);
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(
  //     updateUser({
  //       id: user.id,
  //       age: age,
  //       location: location,
  //       bio: bio,
  //     })
  //   );
  //   window.location.reload();
  // };

  return (
    <>
      <Typography>
        <Link to={`/users/${user.id}`}>Back to my profile</Link>
      </Typography>
      <Container className={classes.container}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8} md={8} className={classes.updateForm}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Typography variant="h6">Account details</Typography>
              <TextField
                className={classes.input}
                onChange={e => setAge(e.target.value)}
                label="How old are you?"
                margin="normal"
                variant="outlined"
              />
              <TextField
                className={classes.input}
                onChange={e => setLocation(e.target.value)}
                label="In what City and State do you Currently live?"
                margin="normal"
                variant="outlined"
              />
              <TextField
                className={classes.input}
                onChange={e => setBio(e.target.value)}
                label="Tell us a little about yourself. i.e. hobbies, interests, why you joined Nostalgia etc. "
                margin="normal"
                variant="outlined"
                multiline
                rows={5}
              />
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
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                Save Info
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UpdateUser;
