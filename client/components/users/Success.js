import React, { useEffect } from 'react';
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
  mainBanner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    marginBottom: 20,
    fontSize: 24,
  },
});

const Success = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { auth } = useSelector(state => state);
  console.log(auth);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Success!
      </Typography>

      <Typography variant="h5" align="center" gutterBottom>
        Welcome to the Nostalgia community! Please select an option below.
      </Typography>

      <Grid className={classes.mainBanner}>
        <Link to={`/users/${auth.id}/details`}>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="secondary"
          >
            TAKE ME TO MY ACCOUNT
          </Button>
        </Link>

        <Link to="/communities">
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="secondary"
          >
            I WANT TO EXPLORE COMMUNITIES
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default Success;
