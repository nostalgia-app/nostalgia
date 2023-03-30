import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
import { setUserCommunities } from '../../store';

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const { auth } = useSelector(state => state);
  const { community } = props;

  const history = useHistory();
  const routeChange = () => {
    let path = `/communities/${community.id}`;
    history.push(path);
  };

  useEffect(() => {
    dispatch(setUserCommunities(auth.id));
  }, [auth.id]);

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
