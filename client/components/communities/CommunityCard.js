import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  Typography,
  Box,
  makeStyles,
} from '@material-ui/core';
import { addUserToCommunity } from '../../store';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    color: 'black',
    padding: 10,
    marginLeft: 20,
    width: 300,
    height: 375,
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
  const history = useHistory();
  const { auth } = useSelector(state => state);
  const { community } = props;

  const routeChange = () => {
    let path = `/communities/${community.id}`;
    history.push(path);
  };

  const addCommunity = (comm, user) => {
    dispatch(addUserToCommunity(comm, user));
  };

  return (
    <Container className={classes.container}>
      <Card elevation={3} className={classes.card}>
        <CardActionArea>
          <Link to={`/communities/${community.id}`}>
            <CardMedia
              src={community.imageUrl}
              component="img"
              height="250"
              width="250"
              sx={{ padding: '1em 1em 0 1em' }}
            />
            <Typography className={classes.title} align="center">
              {community.name}
            </Typography>
          </Link>
        </CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => addCommunity(community.id, auth.id)}
            >
              Join
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={routeChange}
            >
              Learn
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CommunityCard;
