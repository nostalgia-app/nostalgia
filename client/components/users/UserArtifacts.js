import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  artifactCard: {
    // backgroundColor: 'rgb(234, 234, 234)',
    display: 'flex',
    height: '100px',
    padding: 5,
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  image: {
    marginRight: 5,
  },
});

const UserArtifacts = ({ community }) => {
  const classes = useStyles();

  return (
    <Card key={community.id} elevation={2}>
      <Link to={`/communities/${community.id}`}>
        <Grid className={classes.artifactCard}>
          <img src={community.imageUrl} className={classes.image}></img>
        </Grid>
      </Link>
    </Card>
  );
};

export default UserArtifacts;
