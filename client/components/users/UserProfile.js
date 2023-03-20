import React, { useEffect } from 'react';
import { fetchUser } from '../../store';
import { setCommunities } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';
import UserData from './UserData';
import UserProfilePic from './UserProfilePic';
import UserCommunities from './UserCommunities';
import UserArtifacts from './UserArtifacts';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  topRow: {
    display: 'flex',
    border: '2pt solid orange',
  },
  userData: {
    // border: '2pt solid blue',
  },
  profilePic: {
    // border: '2pt solid red',
  },
  middleRow: {
    display: 'flex',
    border: '2pt solid orange',
  },
  artifactsGrid: {
    borderRadius: '.25rem',
    padding: 20,
    marginTop: 10,
    border: '2pt solid blue',
  },
  communitiesGrid: {
    borderRadius: '.25rem',
    padding: 20,
    marginTop: 10,
    border: '2pt solid red',
  },
  card: {
    marginBottom: 10,
  },
});

const UserProfile = () => {
  const classes = useStyles();
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  useEffect(() => {
    dispatch(setCommunities());
  }, []);

  const { user, communities } = useSelector(state => state);
  const currentUser = user.user;

  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Hello {currentUser.firstName}
        </Typography>
        <Typography align="center">
          Today is {format(new Date(), 'MMMM do, Y')}
        </Typography>
      </Container>
      {/* ------------------------------------------------------------------------------ */}

      <Container className={classes.mainContainer}>
        <Grid className={classes.topRow}>
          <Grid className={classes.userData} item xs={12} sm={8} md={8}>
            <UserData user={currentUser} />
          </Grid>
          <Grid className={classes.profilePic} item xs={12} sm={4} md={4}>
            <UserProfilePic user={currentUser} />
          </Grid>
        </Grid>
        {/* ------------------------------------------------------------------------------ */}
        <Grid className={classes.middleRow}>
          <Grid item className={classes.artifactsGrid} xs={12} sm={8} md={8}>
            {currentUser.firstName}'s Artifacts
            {communities.map(community => {
              return (
                <div key={community.id} className={classes.card}>
                  <UserArtifacts community={community} />
                </div>
              );
            })}
          </Grid>
          <Grid item className={classes.communitiesGrid} xs={12} sm={4} md={4}>
            {currentUser.firstName}'s Communities
            {communities.map(community => {
              return (
                <div key={community.id} className={classes.card}>
                  <UserCommunities community={community} />
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfile;
