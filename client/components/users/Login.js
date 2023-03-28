import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { authenticate } from '../../store';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Container,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    paddingTop: 50,
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

const AuthForm = props => {
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();

  const { name, displayName, error } = props;

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authenticate(userName, password, 'login'));
    history.push('/users-success');
  };

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h5">
          Please confirm your username and password to login.
        </Typography>

        <Grid item xs={12} sm={8} md={6}>
          <form className={classes.form} onSubmit={handleSubmit} name={name}>
            <TextField
              className={classes.input}
              onChange={e => setUserName(e.target.value)}
              label="Username"
              margin="normal"
              variant="filled"
            />
            <TextField
              className={classes.input}
              onChange={e => setPassword(e.target.value)}
              label="Password"
              margin="normal"
              variant="filled"
            />
            <Button className={classes.button} type="submit" variant="outlined">
              Submit
            </Button>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </Grid>
      </Container>
    </>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
