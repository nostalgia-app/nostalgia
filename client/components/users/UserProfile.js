import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchUser,
  setUserArtifacts,
  setUserCommunities,
  removeUserFromCommunity,
} from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DialogBox from './DialogueBox';
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  ImageList,
  ImageListItem,
  Button,
  ImageListItemBar,
} from '@material-ui/core';
import UserData from './UserData';
import UserProfilePic from './UserProfilePic';
import UserCommunities from './UserCommunities';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    height: '100%',
    width: '100%',
  },
  topRow: {
    display: 'flex',
    borderRadius: '.25rem',
    background: '#0a1017c0;',
    width: '100%',
  },
  middleRow: {
    padding: 10,
    display: 'flex',
    borderRadius: '.25rem',
    marginBottom: 20,
    background: '#0a1017c0;',
  },
  artifactsGrid: {
    borderRight: '1pt solid grey',
    padding: 20,
    marginTop: 10,
  },
  communitiesGrid: {
    padding: 10,
    marginTop: 5,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const UserProfile = () => {
  const classes = useStyles();
  const { auth, friends } = useSelector(state => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { user, communities, artifacts, userCommunity } = useSelector(
    state => state
  );

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(setUserArtifacts(id));
  }, [id]);

  useEffect(() => {
    dispatch(setUserCommunities(auth.id));
  }, [auth]);

  useEffect(() => {
    dispatch(setUserArtifacts(id));
  }, []);
  const currentUser = user.user;
  const userArtifacts = artifacts.user_artifacts;

  const removeUserCommunity = async (comm, user) => {
    console.log('commmm', comm, user);
    dispatch(removeUserFromCommunity(comm, user));
  };
  console.log('this is the community...', userCommunity);

  return (
    <>
      <Grid>
        {auth.id === id &&
        !currentUser.age &&
        !currentUser.location &&
        !currentUser.bio ? (
          <DialogBox user={user} />
        ) : (
          <span></span>
        )}
      </Grid>
      <Container className={classes.container}>
        <Grid container spacing={0} className={classes.topRow}>
          <Grid item xs={12} sm={8} md={8}>
            <UserData user={currentUser} id={id} communities={communities} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <UserProfilePic user={currentUser} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.middleRow}>
          <Grid item xs={12} sm={8} md={8}>
            <div>{currentUser.firstName}'s Artifacts</div>

            <ImageList className={classes.artifactsGrid}>
              {userArtifacts.map(artifact => {
                return (
                  <ImageListItem key={artifact.id}>
                    <Link to={`/artifacts/${artifact.id}`}>
                      <img
                        src={`.././public/artifactUploads/${artifact.fileName}`}
                      ></img>
                    </Link>

                    <ImageListItemBar title={artifact.name} />
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
            lg={4}
          >
            {currentUser.firstName}'s Communities
            {userCommunity && userCommunity.length > 0 ? (
              userCommunity.map(({ community }) => {
                return (
                  <div key={community.id} className={classes.card}>
                    <UserCommunities
                      community={community}
                      auth={auth}
                      user={currentUser}
                    />
                    {/* <Button
                      className={classes.button}
                      variant="contained"
                      size="large"
                      color="secondary"
                      onClick={() =>
                        removeUserCommunity(community.id, currentUser.id)
                      }
                    >
                      DELETE
                    </Button> */}
                  </div>
                );
              })
            ) : (
              <div> Add some communities </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfile;
