import React, { useEffect } from 'react';
import { fetchUser, fetchImages } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import UserData from './UserData';
import UserMedia from './UserMedia';
import UserImages from './userImages';

const UserDetails = () => {
  const { id } = useParams();

  //
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);
  //
  const data = useSelector(state => state.user);
  const user = data.user;
  //
  useEffect(() => {
    dispatch(fetchImages);
  }, []);
  const imageData = useSelector(state => state.image);
  const images = imageData.images;
  console.log(images);

  return (
    <Container>
      {/* Start the actual page content with a basic title */}
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        User Details
      </Typography>
      <Typography variant="h4" gutterBottom>
        {user.firstName} {user.lastName}
      </Typography>
      {!user.age || !user.location || !user.bio ? (
        <span style={{ color: 'red' }}>
          Please use the form below to complete your account and add a profile
          pic.
        </span>
      ) : (
        <span></span>
      )}
      {/*
      /
      / */}
      <Grid container spacing={2} style={{ display: 'flex', marginTop: 20 }}>
        <Grid item xs={12} sm={6} md={6}>
          <UserData user={user} />
        </Grid>
        {/*
      /
      / */}
        <Grid item xs={12} sm={6} md={6}>
          <UserMedia />
        </Grid>
      </Grid>
      {/*
      /
      / */}
      <Grid
        container
        spacing={1}
        style={{ border: '2pt solid green', marginTop: 20 }}
      >
        <UserImages />
      </Grid>
    </Container>
  );
};

export default UserDetails;
