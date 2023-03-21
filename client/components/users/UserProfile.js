import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../store';
import { setCommunities } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import DialogBox from './DialogueBox';
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  ImageList,
  ImageListItem,
} from '@material-ui/core';
import UserData from './UserData';
import UserProfilePic from './UserProfilePic';
import UserCommunities from './UserCommunities';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  topRow: {
    display: 'flex',
    borderRadius: '.25rem',
    borderBottom: '2pt solid rgb(180, 180, 180)',
    // border: '2pt solid orange',
  },
  userData: {
    backgroundColor: 'rgb(246, 246, 246)',
    // border: '2pt solid blue',
  },
  middleRow: {
    display: 'flex',
    borderRadius: '.25rem',
    marginTop: 5,
    // border: '2pt solid orange',
  },
  profilePic: {
    border: '2pt solid rgb(246, 246, 246)',
    borderRadius: '.25rem',
  },
  artifactsGrid: {
    borderRadius: '.25rem',
    padding: 20,
    marginTop: 10,
    // border: '2pt solid blue',
  },
  communitiesGrid: {
    padding: 10,
    marginTop: 5,
    // border: '2pt solid red',
  },
  artifactsGrid: {
    padding: 10,
    marginTop: 5,
    border: '2pt solid rgb(246, 246, 246)',
    borderRadius: '.25rem',
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const UserProfile = () => {
  const classes = useStyles();
  const { auth } = useSelector(state => state);
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
    <div>
      {auth.id === id ? (
        <>
          <Container>
            <Typography variant="h4" align="center">
              Hello {currentUser.firstName}
            </Typography>
            <Typography align="center">
              Today is {format(new Date(), 'MMMM do, Y')}
            </Typography>
            {!currentUser.age && !currentUser.location && !currentUser.bio ? (
              <DialogBox user={user} />
            ) : (
              <span></span>
            )}
          </Container>

          <Container className={classes.mainContainer}>
            <Grid container spacing={2} className={classes.topRow}>
              <Grid item className={classes.userData} xs={12} sm={8} md={8}>
                <UserData user={currentUser} />
              </Grid>
              <Grid item className={classes.profilePic} xs={12} sm={4} md={4}>
                <UserProfilePic user={currentUser} />
              </Grid>
            </Grid>

            <Grid container spacing={2} className={classes.middleRow}>
              <Grid item xs={12} sm={8} md={8}>
                <ImageList className={classes.artifactsGrid}>
                  {communities.map(item => {
                    return (
                      <ImageListItem key={item.id}>
                        <img src={`${item.imageUrl}`} loading="lazy"></img>
                      </ImageListItem>
                    );
                  })}
                </ImageList>
              </Grid>

              <Grid
                item
                className={classes.communitiesGrid}
                xs={12}
                sm={4}
                md={4}
              >
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
      ) : (
        <Typography variant="h6">
          Unauthorized access. Please <Link to="/login">login</Link> or{' '}
          <Link to="/create-user">create an account</Link>
        </Typography>
      )}
    </div>
  );
};

export default UserProfile;
