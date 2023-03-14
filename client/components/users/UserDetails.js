import React, { useEffect } from 'react';
import { fetchUser } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import UpdateUser from './UpdateUser';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const UserDetails = () => {
  //
  let params = useParams();
  const id = params.id;
  //
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);
  //
  const data = useSelector(state => state.user);
  const user = data.user;

  return (
    // Page is wrapp in a container to start - keeps things spaced clean
    <Container>
      {/* Start the actual page content with a basic title */}
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        User Details
      </Typography>
      <Typography variant="h4" gutterBottom>
        {user.firstName} {user.lastName}
      </Typography>
      <div style={{ border: '2pt solid blue', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          {user.location}
        </Typography>
      </div>
      <div style={{ border: '2pt solid blue', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          {user.age} years old
        </Typography>
      </div>

      <div style={{ border: '2pt solid blue', marginTop: '20px' }}>
        <Typography variant="h5" paragraph gutterBottom>
          {user.bio}
        </Typography>
      </div>
      <div style={{ border: '2pt solid blue', marginTop: '20px' }}>
        <Grid>
          <UpdateUser user={user} />
        </Grid>
      </div>
    </Container>
  );
};

export default UserDetails;
