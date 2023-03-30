import React, { useEffect } from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Grid, makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { setUserCommunities, removeUserFromCommunity } from '../../store';

const useStyles = makeStyles({
  communityCard: {
    display: 'flex',
    backgroundColor: 'rgb(115, 115, 115)',
    display: 'flex',
    height: '50px',
    padding: 5,
  },
  image: {
    marginRight: 5,
    maxWidth: '50px',
  },
  cardLeft: {
    display: 'flex',
    height: '90%',
    width: '100%',
  },

  cardRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    width: '15%',
    color: 'white',
  },
  image: {
    margin: 'auto',
    height: '95%',
    width: '25%',
  },
  name: {
    marginLeft: 10,
    margin: 'auto',
    width: '100%',
    fontSize: '11pt',
    fontWeight: 800,
    color: 'white',

    '&:hover': {
      color: 'blue',
      cursor: 'pointer',
    },
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
      <Grid className={classes.communityCard}>
        <Link to={`/communities/${community.id}`} className={classes.link}>
          <Grid className={classes.cardLeft}>
            <img src={community.imageUrl} className={classes.image}></img>

            <Grid className={classes.name}>{community.name}</Grid>
          </Grid>
        </Link>
        <Grid className={classes.cardRight}>
          <DeleteForeverIcon
            onClick={() => removeUserCommunity(community.id, user.id)}
            fontSize="large"
            cursor="pointer"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserMediaCommunity;
