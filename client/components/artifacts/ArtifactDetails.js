import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchImage,
  updateImage,
  fetchComments,
  createComment,
} from '../../store';
import {
  Container,
  Typography,
  Card,
  Button,
  Grid,
  TextField,
} from '@material-ui/core';

// IMAGES DATA HAS BEEN USED FOR TESTING UPLOADS - REPLACE WITH ARTIFACT DATA

const ArtifactDetails = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  // console.log(auth);

  // IMAGES
  useEffect(() => {
    dispatch(fetchImage(id));
  }, []);
  const { image } = useSelector(state => state.image);

  // COMMENTS
  const [commentContent, setCommentContent] = useState('');
  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  const { comments } = useSelector(state => state.comment);
  // const comments = data.comments;

  const postComment = e => {
    e.preventDefault();

    console.log(commentContent);
    dispatch(
      createComment({
        data: commentContent,
        artifactId: id,
        userId: auth.id,
      })
    );
  };

  // update - increment 'likes' by 1 each click
  const handleClick = () => {
    console.log('image liked');
    dispatch(updateImage({ id: image.id, likes: image.likes + 1 }));
    window.location.reload();
  };

  // wide row format - image 70% / content 30% - content contains description, like button and likes. We can place additional stats here, icons etc.
  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Artifact Details
      </Typography>
      <Card elevation={3} style={{ padding: 10 }}>
        <Typography variant="h5" gutterBottom>
          {image.title}
        </Typography>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '70%' }}>
            <img
              style={{ width: '100%' }}
              src={`.././public/artifactUploads/${image.fileName}`}
            ></img>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '20px',
              width: '30%',
              paddingTop: 10,
              paddingLeft: 10,
              // border: '2pt solid orange',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '20px',
                width: '90%',
                // border: '2pt solid rgb(60, 255, 0)',
              }}
            >
              {image.description}
            </div>
            <div style={{ paddingTop: 10 }}>
              <div>
                <Button
                  onClick={handleClick}
                  variant="contained"
                  color="primary"
                >
                  Like
                </Button>
              </div>
              {/* 
              /
              /
              /
              /
              */}
              <div style={{ paddingTop: 10 }}>{image.likes}</div>
            </div>
            <div
              style={{ border: '2pt solid blue', height: '95%', padding: 5 }}
            >
              <form onSubmit={postComment}>
                <div
                  style={{
                    border: '2pt solid green',
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <TextField
                    style={{ width: '100%' }}
                    onChange={e => setCommentContent(e.target.value)}
                    label="post a comment"
                    margin="normal"
                    variant="outlined"
                    multiline
                    minRows={5}
                  />
                  <button>POST</button>
                </div>
              </form>

              <div style={{ border: '2pt solid green' }}>
                Comments
                {comments.map(comment => {
                  return (
                    <div
                      key={comment.id}
                      style={{
                        border: '1pt solid rgb(241, 241, 241)',
                        padding: 5,
                        margin: 10,
                      }}
                    >
                      <span>{comment.comment}</span> -
                      <span>Likes: {comment.likes}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default ArtifactDetails;
