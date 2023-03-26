import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100vw',
  },
  heading: {
    fontSize: '120pt',
    fontFamily: 'Righteous, cursive',
    color: '#66FCf1',
  },
  title: {
    fontSize: '30',
    fontFamily: 'Exo 2, sans-serif',
  },
  body: {
    marginBottom: 200,
  },
  bodyFont: {
    fontFamily: 'Exo 2, sans-serif',
    marginBottom: 10,
  },
});

export const Home = props => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Grid className={classes.body}>
        <Typography className={classes.heading} align="center">
          NOSTALGIA
        </Typography>
        <Typography
          className={classes.title}
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
        >
          nost•tal•gia -
        </Typography>
        <Typography
          className={classes.bodyFont}
          variant="h6"
          component="h1"
          gutterBottom
        >
          a wistful desire to return in thought or in fact to a former time in
          one's life, to one's home or homeland, or to one's family and friends:
          a sentimental yearning for the happiness of a former place or time:
        </Typography>
        <br></br>

        <Typography className={classes.bodyFont} variant="h6">
          Nostalgia builds community by creating a platform where families and
          friends can stitch together artifacts, stories, and connections to
          create memories.
        </Typography>
      </Grid>
    </Container>
  );
};
