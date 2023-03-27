import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    marginTop: 50,
    border: '2pt solid red',
  },
  buttons: {
    borderRadius: '.25rem',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '100%',
    margin: 5,
    backgroundColor: '#1f2833',
    border: '2pt solid #66FCF1',
    color: 'white',
    fontFamily: 'Exo 2, sans-serif',
  },
});

const Success = () => {
  const classes = useStyles();

  const { auth } = useSelector(state => state);

  return (
    <Container className={classes.container}>
      <Typography variant="h3" align="center" gutterBottom>
        Success!
      </Typography>

      <Typography variant="h5" align="center" gutterBottom>
        Welcome to the Nostalgia community! Please select an option below.
      </Typography>

      <Grid className={classes.buttons}>
        <Link to={`/users/${auth.id}`}>
          <Button className={classes.button} size="large">
            TAKE ME TO MY ACCOUNT
          </Button>
        </Link>

        <Link to="/communities">
          <Button className={classes.button} size="large">
            I WANT TO EXPLORE COMMUNITIES
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default Success;
