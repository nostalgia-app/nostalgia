import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  mediaContainer: {
    borderRadius: '.5rem',
    padding: 10,
  },
  card: {
    backgroundColor: 'rgb(234, 234, 234)',
  },

  gridItem: {
    border: '2pt solid grey',
    borderRadius: '.25rem',
    padding: 10,
    marginTop: 20,
  },
});

const UserProfilePic = ({ user }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Container className={classes.mediaContainer}>
      <Card elevation={1} className={classes.card}>
        <div style={{ maxHeight: 350, maxWidth: 300, backgroundSize: 'cover' }}>
          {user.profilePic ? (
            <img src={`.././public/profilePicUploads/${user.profilePic}`}></img>
          ) : (
            <span></span>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default UserProfilePic;
