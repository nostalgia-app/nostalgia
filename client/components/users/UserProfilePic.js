import React from 'react';
import { Container, Card, Grid, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  mediaContainer: {
    borderRadius: '.5rem',
    padding: 10,
  },
  card: {
    backgroundColor: 'rgb(234, 234, 234)',
  },
  profilePic: {
    height: 400,
  },
  gridItem: {
    border: '2pt solid grey',
    borderRadius: '.25rem',
    padding: 10,
    marginTop: 20,
  },
  edit: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const UserProfilePic = ({ user }) => {
  const classes = useStyles();

  return (
    <Container className={classes.mediaContainer}>
      <Card elevation={1} className={classes.card}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.profilePic}
        >
          {user.profilePic ? (
            <img src={`.././public/profilePicUploads/${user.profilePic}`}></img>
          ) : (
            <span></span>
          )}
        </Grid>
      </Card>
      <div className={classes.edit}>
        <Link to={`/users/${user.id}/update-user`}>
          <Button className={classes.button} variant="contained">
            EDIT PROFILE
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default UserProfilePic;
