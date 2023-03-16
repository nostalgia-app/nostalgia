import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchImage, updateImage } from '../../store';
import { Container, Typography, Grid, Card, Button } from '@material-ui/core';

// IMAGES DATA HAS BEEN USED FOR TESTING UPLOADS - REPLACE WITH ARTIFACT DATA

const ArtifactDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(fetchImage(id));
  }, []);

  // update - increment 'likes' by 1 each click
  const handleClick = () => {
    console.log('image liked');
    dispatch(updateImage({ id: image.id, likes: image.likes + 1 }));
  };

  const { image } = useSelector(state => state.image);
  console.log(image.likes);

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
              <div style={{ paddingTop: 10 }}>{image.likes}</div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default ArtifactDetails;
