import React from 'react';
import { useHistory } from 'react-router-dom';
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
  CardHeader,
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
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1f2833',
    color: 'white',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
        <CardHeader
          className={classes.header}
          title={friend.firstName + ' ' + friend.lastName}
          titleTypographyProps={{ variant: 'h6' }}
        ></CardHeader>
        <CardActionArea>
          <CardMedia
            onClick={handleFriendClick}
            src={`.././public/profilePicUploads/${friend.profilePic}`}
            component="img"
            height="220"
            width="140"
          />
        </CardActionArea>
        <CardActions className={classes.actions}>
          {friend.friendInd === 'Y' ? (
            <Button
              className={classes.remove}
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
