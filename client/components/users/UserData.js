import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    marginTop: 15,
    borderRadius: '.5rem',
    padding: 15,
  },
  headings: {
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    marginBottom: 15,
  },
  bio: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    border: '2pt solid rgb(221, 221, 221)',
    borderRadius: '.25rem',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    margin: 5,
  },
});

const UserData = ({ user }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const displayFriends = () => {
    setOpen(true);
  };
  const closeFriends = () => {
    setOpen(false);
  };

  return (
    <Container item className={classes.dataContainer}>
      <Grid className={classes.headings}>
        <Typography variant="h6">{user.firstName}'s Location</Typography>
        <Typography paragraph align="center">
          {user.location}
        </Typography>
      </Grid>

      <Grid className={classes.headings}>
        <Typography variant="h6">{user.firstName}'s Age</Typography>
        <Typography paragraph align="center">
          {user.age ? user.age + ` years old` : <span></span>}
        </Typography>
      </Grid>

      <Grid className={classes.bio}>
        <Typography variant="h6">
          A little more about {user.firstName}
        </Typography>
        <Typography paragraph align="center">
          {user.bio}
        </Typography>
      </Grid>

      {/* ------------------------------------------------------------------------------ */}

      <Grid item className={classes.buttons} xs={12} sm={8} md={8}>
        <Link to={`/users/${user.id}/update-user`}>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="secondary"
          >
            EDIT PROFILE
          </Button>
        </Link>

        <Button
          className={classes.button}
          variant="contained"
          size="large"
          color="secondary"
          onClick={displayFriends}
        >
          MY FRIENDS
        </Button>

        {/* ------------------------------------------------------------------------------ */}

        <Dialog open={open} user={user}>
          <Container className={classes.container}>
            <Typography className={classes.text} variant="h4" align="center">
              {user.firstname} 's friends...'
            </Typography>
            <Typography className={classes.text} paragraph align="center">
              List of friends.
            </Typography>

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
