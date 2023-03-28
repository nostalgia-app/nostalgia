import React from 'react';
import { Container, Card, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    borderRadius: '.5rem',
    padding: 10,
    maxWidth: 300,
  },
});

const UserProfilePic = ({ user }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card elevation={1} className={classes.card}>
        <CardMedia
          src={`.././public/profilePicUploads/${user.profilePic}`}
          component="img"
          height="400"
          width="200"
        />
      </Card>
    </Container>
  );
};

export default UserProfilePic;
