import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  communityCard: {
    backgroundColor: 'rgb(234, 234, 234)',
    display: 'flex',
    height: '50px',
    padding: 5,
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  image: {
    marginRight: 5,
    maxWidth: '50px',
  },
  name: {
    marginLeft: 5,
    margin: 'auto',
    fontSize: 14,
  },
});

const UserMediaCommunity = ({ community }) => {
  const classes = useStyles();

  return (
    <Card key={community.id} elevation={2}>
      <Link to={`/communities/${community.id}`}>
        <Grid className={classes.communityCard}>
          <img src={community.imageUrl} className={classes.image}></img>
          <div className={classes.name}>{community.name}</div>
        </Grid>
      </Link>
    </Card>
  );
};

export default UserMediaCommunity;
