import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2pt solid blue',
    width: '100%',
    height: '100%',
  },
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Typography>Sorry. The page you are looking for does not exist.</Typography>
      <Link to="/">Return to Home</Link>
    </Container>
  );
};

export default NotFound;
