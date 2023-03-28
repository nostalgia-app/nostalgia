import React, { useEffect } from 'react';
import { Card, Grid, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserCommunities, removeUserFromCommunity } from '../../store';

const useStyles = makeStyles({
  communityCard: {
    backgroundColor: '#1f2833',
    display: 'flex',
    height: '50px',
    padding: 5,
    '&:hover': {
      backgroundColor: '#3c4d62',
    },
  },
  image: {
    marginRight: 5,
    maxWidth: '50px',
  },
  cardFooter: {
    backgroundColor: '#1f2833',
    padding: 5,
  },
  button: {
    backgroundColor: '#1f2833',
    color: 'white',
    fontSize: '8pt',
    '&:hover': {
      backgroundColor: 'rgb(148, 24, 24)',
    },
  },
  name: {
    marginLeft: 5,
    margin: 'auto',
    fontSize: 14,
  },
});

const UserMediaCommunity = ({ community, auth, user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserCommunities(auth.id));
  }, [auth.id]);

  const removeUserCommunity = async (comm, user) => {
    dispatch(removeUserFromCommunity(comm, user));
  };

  return (
    <Card key={community.id} elevation={2}>
      <Link to={`/communities/${community.id}`}>
        <Grid className={classes.communityCard}>
          <img src={community.imageUrl} className={classes.image}></img>
          <div className={classes.name}>{community.name}</div>
          {/* <Grid className={classes.cardFooter}>
            <button
              className={classes.button}
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => removeUserCommunity(community.id, user.id)}
            >
              DELETE
            </button>
          </Grid> */}
        </Grid>
      </Link>
      <Grid className={classes.cardFooter}>
        <button
          className={classes.button}
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => removeUserCommunity(community.id, user.id)}
        >
          DELETE
        </button>
      </Grid>
    </Card>
  );
};

export default UserMediaCommunity;
