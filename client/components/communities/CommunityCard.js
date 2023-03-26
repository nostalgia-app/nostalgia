import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  Typography,
  Box,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    color: 'black',
    padding: 10,
    marginLeft: 20,
    width: 300,
    height: 300,
  },
});

const CommunityCard = props => {
  const classes = useStyles();
  const { community } = props;

  const history = useHistory();
  const routeChange = () => {
    let path = `/communities/${community.id}`;
    history.push(path);
  };
  useEffect(() => {
    dispatch(me());
  }, []);
  const { auth } = useSelector(state => state);

  const addCommunity = (comm, user) => {
    dispatch(addUserToCommunity(comm, user));
  };
  return (
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
          <Typography align="center" style={{ overflowWrap: 'break-word' }}>
            {community.name}
          </Typography>
        </Link>
      </CardActionArea>
      <CardContent>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Button variant="contained" sx={{ borderRadius: 50 }}>
            Join
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: 50 }}
            onClick={routeChange}
          >
            Learn
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
