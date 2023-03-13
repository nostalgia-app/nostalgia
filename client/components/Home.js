import React from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Home = props => {
  const { username } = props;

  return (
    // Page is wrapp in a container to start - keeps things spaced clean
    <Container>
      {/* Start the actual page content with a basic title */}
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Home Heading
      </Typography>
      <Typography align="center" gutterBottom>
        Welcome {username}
      </Typography>
      <Typography variant="h5" align="center">
        Nostalgia builds community by creating a platform where families and
        friends can stitch together artifacts, stories, and connections to
        create memories.
      </Typography>

      {/* Basic button row - modifed to link to whatever needed */}
      <div
        style={{
          backgroundColor: 'rgb(241, 241, 241)',
          borderRadius: '.25rem',
          marginTop: 30,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Link to="/communities">
              <Button variant="contained" size="large" color="secondary">
                COMMUNITIES
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/artifacts">
              <Button variant="contained" size="large" color="secondary">
                ARTIFACTS
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" color="secondary">
              MY ACCOUNT
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
//////////////////////////////////
// mapState = state => {
//   return {
//     username: state.auth.username,
//   };
// };

// export default Home;
