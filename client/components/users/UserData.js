import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommunityCard from '../communities/CommunityCard';
import {
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(246, 246, 246)',
    borderRadius: '.5rem',
    padding: 10,
  },
  data: {
    borderTop: '2pt solid grey',
    marginTop: 10,
    padding: 20,
  },
  buttons: {
    border: '2pt solid rgb(221, 221, 221)',
    borderRadius: '.25rem',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '100%',
    margin: 5,
  },
});

const UserData = ({ user, id, communities }) => {
  const classes = useStyles();
  const { auth } = useSelector(state => state);

  const [open, setOpen] = useState(false);

  const displayFriends = () => {
    setOpen(true);
  };
  const closeFriends = () => {
    setOpen(false);
  };

  return (
    <Container item className={classes.dataContainer}>
      <Typography variant="h2" align="center">
        {user.firstName} {user.lastName}
      </Typography>

      <Grid className={classes.data}>
        <Typography variant="h6" align="center">
          {user.firstName}'s Age
        </Typography>
        <Typography paragraph align="center">
          {user.age ? user.age + ` years old` : <span></span>}
        </Typography>
        <Typography variant="h6" align="center">
          {user.firstName}'s Location
        </Typography>
        <Typography paragraph align="center">
          {user.location}
        </Typography>
        <Typography variant="h6" align="center">
          A little more about {user.firstName}
        </Typography>
        <Typography paragraph align="center">
          {user.bio}
        </Typography>
      </Grid>

      <Grid container spacing={2} className={classes.buttons}>
        {auth.id === id ? (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Link to={`/users/${user.id}/update-user`}>
              <Button className={classes.button} variant="contained">
                EDIT PROFILE
              </Button>
            </Link>
          </Grid>
        ) : (
          <span></span>
        )}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Button
            className={classes.button}
            variant="contained"
            onClick={displayFriends}
          >
            FRIENDS
          </Button>
        </Grid>

        <Dialog open={open} user={user}>
          <Container className={classes.container}>
            <Typography className={classes.text} variant="h4" align="center">
              {user.firstname} 's friends...'
            </Typography>
            <Typography className={classes.text} paragraph align="center">
              List of friends.
            </Typography>
            <Grid
              item
              className={classes.communitiesGrid}
              xs={12}
              sm={4}
              md={4}
            >
              {communities.map(community => {
                return (
                  <div key={community.id} className={classes.card}>
                    <CommunityCard community={community} />
                  </div>
                );
              })}
            </Grid>

            <DialogActions className={classes.text}>
              <Button variant="outlined" onClick={closeFriends}>
                Close
              </Button>
            </DialogActions>
          </Container>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default UserData;
