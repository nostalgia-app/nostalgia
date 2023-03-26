import React, { Fragment } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Card,
  CardMedia,
  CardActionArea,
  Button,
  Typography,
  CardActions,
  makeStyles,
} from '@material-ui/core';
import { addFriend, deleteFriend } from '../../store';

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
    width: 200,
    height: 300,
  },
});

const FriendCard = ({ friend }) => {
  const classes = useStyles();
  const history = useHistory();
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleAddClick = (userId, friendId) => {
    dispatch(addFriend({ userId: userId, friendId: friendId }));
  };

  const handleRemovelick = userFriendId => {
    dispatch(deleteFriend(userFriendId));
  };

  const handleFriendClick = () => {
    history.push(`/users/${friend.id}`);
    window.location.reload();
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.card} elevation={3}>
        <CardActionArea>
          {/* <Link to={`/users/${friend.id}`}> */}
          <CardMedia
            onClick={handleFriendClick}
            src={`.././public/profilePicUploads/${friend.profilePic}`}
            component="img"
            height="220"
            width="140"
          />
          <Typography align="center">
            {friend.firstName + ' ' + friend.lastName}
          </Typography>
          {/* </Link> */}
        </CardActionArea>
        <CardActions>
          {friend.friendInd === 'Y' ? (
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => handleRemovelick(friend.userFriendId)}
            >
              Remove Friend
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => handleAddClick(auth.id, friend.id)}
            >
              Add Friend
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default FriendCard;
