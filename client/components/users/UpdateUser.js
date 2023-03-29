import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUser, deleteUser } from '../../store';
import { useParams, useHistory } from 'react-router-dom';
import ProfilePicUpload from './ProfilePicUpload';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Dialog,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

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
    marginTop: 30,
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
  deleteButton: {
    backgroundColor: 'rgb(115, 115, 115)',
    marginTop: 10,
    color: 'white',
    borderRadius: '.25rem',
    height: '37px',
    border: 'none',
    fontFamily: 'Exo 2, sans-serif',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(197, 0, 0)',
    },
  },
  deleteBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  cancelDelete: {
    backgroundColor: '#1f2833',
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const closeDelete = () => {
    setOpen(false);
  };

  const deleteUserAccount = () => {
    dispatch(deleteUser(id));
    history.push(`/`);
    window.location.reload();
  };

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
      <button className={classes.deleteButton} onClick={handleClickOpen}>
        Delete My Account
      </button>
      <Dialog open={open}>
        <Container className={classes.deleteBox}>
          <Typography variant="h5" align="center" gutterBottom>
            Are you sure you want to delete your account?
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            This action cannot be undone.
          </Typography>
          <button className={classes.deleteButton} onClick={deleteUserAccount}>
            Delete My Account
          </button>

          <Button
            className={classes.cancelDelete}
            variant="contained"
            onClick={closeDelete}
          >
            Cancel
          </Button>
        </Container>
      </Dialog>
      <Container className={classes.container}>
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
