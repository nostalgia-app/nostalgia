import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { removeArtifact } from '../../store';

const ArtifactCard = ({ artifact }) => {
  const dispatch = useDispatch();

  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <Card
        elevation={3}
        style={{ color: 'black', padding: 10, marginLeft: 20, width: '95%' }}
      >
        <CardHeader title={artifact.name} />
        <Link to={`/artifacts/${artifact.id}`}>
          <CardMedia style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={`.././public/artifactUploads/${artifact.fileName}`}></img>
          </CardMedia>
        </Link>
        <CardContent>
          {artifact.description ? artifact.description : ''}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => dispatch(removeArtifact(artifact))}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ArtifactCard;
