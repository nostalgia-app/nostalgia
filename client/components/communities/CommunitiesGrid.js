import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid } from '@material-ui/core';

const CommunitiesGrid = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/communities-details">Community Details</Link>
      </div>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Communities
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '2pt solid blue',
          }}
        >
          <Grid item style={{ border: '2pt solid orange', margin: '10px' }}>
            Content goes here...
          </Grid>
          <Grid item style={{ border: '2pt solid orange', margin: '10px' }}>
            Content goes here...
          </Grid>
          <Grid item style={{ border: '2pt solid orange', margin: '10px' }}>
            Content goes here...
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CommunitiesGrid;
