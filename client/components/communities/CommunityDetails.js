import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid } from '@material-ui/core';

const CommunityDetails = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}></div>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Community Details
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
          <Grid item style={{ border: '2pt solid green', margin: '10px' }}>
            Image or Header box/row
          </Grid>
          <Grid item style={{ border: '2pt solid orange', margin: '10px' }}>
            Content goes here...
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CommunityDetails;
