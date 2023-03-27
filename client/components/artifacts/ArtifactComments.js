import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, createComment } from '../../store';
import CommentsCard from './CommentsCard';
import { Card, Button, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40vh',
    width: '100vw',
    paddingTop: 50,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '.25rem',
    width: '100%',
  },
  button: {
    backgroundColor: '#1f2833',
    marginTop: 5,
    marginBottom: 20,
    color: 'white',
  },
});

const ArtifactComments = ({ id }) => {
  const classes = useStyles();
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
        <form className={classes.form} onSubmit={postComment}>
          <div>
            <TextField
              className={classes.input}
              // style={{ backgroundColor: 'white', width: '100%' }}
              onChange={e => setCommentContent(e.target.value)}
              label="post a comment"
              margin="normal"
              variant="outlined"
              multiline
              minRows={4}
            />
            <Button
              className={classes.button}
              onClick={postComment}
              variant="contained"
              color="primary"
            >
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
