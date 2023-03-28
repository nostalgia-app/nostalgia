import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card, CardContent, CardActions } from '@material-ui/core';
import { updateComment } from '../../store';

const CommentsCard = ({ comment }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateComment({ id: comment.id, likes: comment.likes + 1 }));
    window.location.reload();
  };
  return (
    <Container
      style={{
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Card elevation={0} style={{ color: 'black' }}>
        <CardContent style={{ padding: 2 }}>{comment.comment}</CardContent>
        <CardActions>
          <button
            onClick={handleClick}
            style={{
              fontSize: 10,
              backgroundColor: 'rgb(237, 237, 237)',
              borderRadius: '.25rem',
            }}
          >
            Like
          </button>
          <span style={{ fontSize: 13, marginLeft: 10 }}>{comment.likes}</span>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CommentsCard;
