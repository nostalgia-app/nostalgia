import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  Box,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { addUserToCommunity, setUserCommunities } from '../../store';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    color: 'black',
    padding: 10,
    height: 400,
    width: 300,
    // maxHeight: 700,
  },
  header: {
    display: 'flex',
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: '#1f2833',
    color: 'white',
    height: 80,
  },
  title: {
    color: 'black',
  },
  button: {
    backgroundColor: '#1f2833',
    marginTop: 5,
    color: 'white',
  },
});

const CommunityCard = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { community } = props;

  const history = useHistory();
  const routeChange = () => {
    let path = `/communities/${community.id}`;
    history.push(path);
  };

  const { auth, userCommunity } = useSelector(state => state);

  useEffect(() => {
    dispatch(setUserCommunities(auth.id));
  }, [auth.id]);

  const addCommunity = (comm, user, userComms) => {
    for (let i of userComms) {
      if (i.communityId === comm) {
        alert('You are already part of this Community');
      } else {
        dispatch(addUserToCommunity(comm, user));
      }
    }
  };
  return (
    <Container className={classes.container}>
      <Card elevation={3} className={classes.card}>
        <Link to={`/communities/${community.id}`}>
          <CardHeader className={classes.header} title={community.name} />
          <CardMedia
            src={community.imageUrl}
            component="img"
            height="200"
            width="250"
            sx={{ padding: '1em 1em 0 1em' }}
          />
        </Link>
        <CardContent>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Button
              className={classes.button}
              variant="contained"
              onClick={routeChange}
            >
              Learn More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CommunityCard;
