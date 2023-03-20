import React from 'react';
import { updateArtifact } from '../../store';
import { useDispatch } from 'react-redux';
import { Card, CardMedia, CardContent, Button } from '@material-ui/core';

const ArtifactDetailsCard = ({ artifact }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateArtifact({ id: artifact.id, likes: artifact.likes + 1 }));
    window.location.reload();
  };
  return (
    <Card elevation={3} style={{ padding: 10 }}>
      {/* <CardHeader title={artifact.name} /> */}
      <CardMedia src={artifact.fileName}>
        <div>
          <img
            src={`.././public/artifactUploads/${artifact.fileName}`}
            style={{ width: '100%' }}
          ></img>
        </div>
      </CardMedia>
      <CardContent>
        {artifact.description}
        <div style={{ marginTop: 10 }}>
          <Button onClick={handleClick} variant="contained" color="primary">
            Like
          </Button>
          <span style={{ fontSize: 20, marginLeft: 10 }}>{artifact.likes}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtifactDetailsCard;
