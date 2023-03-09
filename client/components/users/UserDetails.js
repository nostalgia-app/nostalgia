import React, { useEffect } from 'react';
import { fetchUser } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import UpdateUser from './UpdateUser';

import {
  Button,
  Container,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

const UserDetails = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);
  const data = useSelector(state => state.user);
  const user = data.user;

  return (
    <>
      <Container>
        <Typography variant="h4">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="h5">{user.location}</Typography>
        <Typography paragraph>{user.age} years old</Typography>

        <Grid>
          <UpdateUser user={user} />
        </Grid>
      </Container>
    </>
  );
};

export default UserDetails;
