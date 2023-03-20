import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  dataContainer: {
    marginTop: 15,
    backgroundColor: 'rgb(246, 246, 246)',
    borderRadius: '.5rem',
    padding: 15,
  },
  headings: {
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    marginBottom: 15,
  },
});

const UserData = ({ user }) => {
  const classes = useStyles();
  return (
    <Container item className={classes.dataContainer}>
      <Grid className={classes.headings}>
        <Typography variant="h6">
          {user.firstName}'s Location<br></br>
        </Typography>
        <Typography paragraph>{user.location}</Typography>
      </Grid>

      <Grid className={classes.headings}>
        <Typography variant="h6">
          {user.firstName}'s Age<br></br>
        </Typography>
        <Typography paragraph>
          {user.age ? user.age + ` years old` : <span></span>}
        </Typography>
      </Grid>

      <Grid className={classes.headings}>
        <Typography variant="h6">
          A little more about {user.firstName}
          <br></br>
        </Typography>
        <Typography>{user.bio}</Typography>
      </Grid>
      <Grid>
        <Link to={`/users/${user.id}/update-user`}>
          <Button variant="contained" color="primary">
            Edit my Account
          </Button>
        </Link>
      </Grid>

      <Grid
        item
        style={{
          marginTop: '20px',
        }}
      ></Grid>
    </Container>
  );
};

export default UserData;
