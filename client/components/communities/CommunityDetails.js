import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setArtifacts, setUserCommunities } from '../../store';
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { setCommunity } from '../../store';
import { useHistory } from 'react-router-dom';
import ArtifactList from '../artifacts/ArtifactList';
import EditCommunity from './EditCommunity';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 50,
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  banner: {
    display: 'flex',
    marginBottom: 20,
    background: '#0d1217ea;',
    paddingBottom: 20,
    borderBottom: '4pt solid white',
  },
  card: {
    marginBottom: 10,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bio2: {
    padding: 5,
    paddingBottom: 20,
    color: 'white',
  },
  buttons2: {
    display: 'flex',
    flexDirection: 'column',
  },
  button2: {
    width: '60%',
    marginLeft: 7,
    backgroundColor: 'rgb(115, 115, 115)',
    '&:hover': {
      backgroundColor: 'white',
      color: '#1f2833',
    },
    marginTop: 5,
    color: 'white',
    fontWeight: 800,
  },
  button: {
    width: '25%',
    margin: 5,
    backgroundColor: '#1f2833',
    color: 'white',
    fontFamily: 'Exo 2, sans-serif',
  },
  members: {
    marginTop: 15,
    marginLeft: 10,
  },
  bio: {
    fontSize: '12pt',
    color: 'black',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  artifactList: {
    marginBottom: 50,
    width: '100%',
  },
});

const CommunityDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth, artifacts, community } = useSelector(state => state);
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  // const routeChange = () => {
  //   let path = `/communities/`;
  //   history.push(path);
  // };

  useEffect(() => {
    dispatch(setCommunity(id));
  }, [id]);

  useEffect(() => {
    dispatch(setArtifacts(id));
  }, []);
  useEffect(() => {
    dispatch(setUserCommunities(auth.id));
  }, [auth.id]);

  // const addCommunity = (comm, user, userComms) => {
  //   for (let i of userComms) {
  //     if (i.communityId === comm) {
  //       alert('You are already part of this Community');
  //     } else {
  //       dispatch(addUserToCommunity(comm, user));
  //     }
  //   }
  // };

  return (
    <Container className={classes.container}>
      <Grid className={classes.title}>
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          {community.name}
        </Typography>
      </Grid>
      <Grid className={classes.banner} container spacing={1}>
        <Grid className={classes.leftTop} item={12} sm={8} md={8}>
          <Card className={classes.card} elevation={2}>
            <CardMedia
              src={community.imageUrl}
              component="img"
              height="400"
              width="250"
              sx={{ padding: '1em 1em 0 1em' }}
            />
          </Card>
        </Grid>
        <Grid className={classes.rightTop} item={12} sm={4} md={4}>
          <Typography className={classes.bio2} paragraph>
            {community.bio}
          </Typography>
          <Grid className={classes.buttons2}>
            <Button
              className={classes.button2}
              variant="contained"
              // onClick={() => addCommunity(community.id, auth.id)}
            >
              Join
            </Button>
          </Grid>
          <Grid className={classes.members}>
            <img
              src={`.././public/communityUploads/people.png`}
              style={{ height: '27px' }}
            ></img>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.cardContainer}></Grid>

      <Grid className={classes.artifactList}>
        <ArtifactList artifacts={artifacts} />
      </Grid>

      <EditCommunity community={community} open={open} onClose={handleClose} />
    </Container>
  );
};

export default CommunityDetails;
