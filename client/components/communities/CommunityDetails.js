import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setArtifacts } from '../../store';
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
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '25%',
    margin: 5,
    backgroundColor: '#1f2833',
    color: 'white',
    fontFamily: 'Exo 2, sans-serif',
  },
  bio: {
    fontSize: '12pt',
    color: 'black',
  },
  artifactList: {
    marginTop: 20,
    marginBottom: 20,
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const routeChange = () => {
    let path = `/communities/`;
    history.push(path);
  };

  useEffect(() => {
    dispatch(setCommunity(id));
  }, [id]);

  useEffect(() => {
    dispatch(setArtifacts(id));
  }, []);

  return (
    <Container className={classes.container}>
      <Grid className={classes.cardContainer}>
        <Card
          elevation={1}
          style={{
            color: 'black',
            padding: 10,
            width: '70%',
          }}
        >
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            {community.name}
          </Typography>

          <Grid className={classes.buttons}>
            <Button className={classes.button} variant="contained">
              Join
            </Button>
            {auth.id === community.adminId ? (
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleClickOpen}
              >
                Edit Details
              </Button>
            ) : (
              ''
            )}
            <Button
              className={classes.button}
              variant="contained"
              onClick={routeChange}
            >
              Back
            </Button>
          </Grid>
          <CardMedia
            src={community.imageUrl}
            component="img"
            style={{ maxHeight: 250 }}
          />
          <Typography className={classes.bio} paragraph>
            {community.bio}
          </Typography>
        </Card>
      </Grid>

      <Grid className={classes.artifactList}>
        <ArtifactList artifacts={artifacts} />
      </Grid>

      <EditCommunity community={community} open={open} onClose={handleClose} />
    </Container>
  );
};

export default CommunityDetails;
