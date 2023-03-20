import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, createComment } from '../../store';
import CommentsCard from './CommentsCard';

import { Card, Button, TextField } from '@material-ui/core';

const ArtifactComments = ({ id }) => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    dispatch(fetchComments(id));
  }, []);
  const { comments } = useSelector(state => state.comment);

  const postComment = e => {
    e.preventDefault();
    dispatch(
      createComment({
        data: commentContent,
        artifactId: id,
        userId: auth.id,
      })
    );
    window.location.reload();
  };

  return (
    <Card
      elevation={1}
      style={{
        backgroundColor: 'rgb(241, 241, 241)',
        padding: 5,
        paddingBottom: 20,
      }}
    >
      <div>
        <form onSubmit={postComment}>
          <div
            style={{
              marginBottom: 10,
            }}
          >
            <TextField
              style={{ backgroundColor: 'white', width: '100%' }}
              onChange={e => setCommentContent(e.target.value)}
              label="post a comment"
              margin="normal"
              variant="outlined"
              multiline
              minRows={4}
            />
            <Button onClick={postComment} variant="contained" color="primary">
              POST
            </Button>
          </div>
        </form>

        <div
          style={{
            boxShadow: 'inset  1px 3px 3px #8e8e8e',
            backgroundColor: 'white',
            padding: 10,
          }}
        >
          {comments.map(comment => {
            return (
              <div key={comment.id}>
                <CommentsCard comment={comment} />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default ArtifactComments;
