import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core';

const ArtifactCard = ({ artifact }) => {
  return (
    // card is wrapped in container to start - clean spacing
    // always try to use standard card elements: Header, Media, Content
    // card is wrapped in 'Link' to individual details page

    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={`/artifacts/${artifact.id}`}>
        <Card
          elevation={3}
          style={{ color: 'black', padding: 10, marginLeft: 20, width: '95%' }}
        >
          <CardHeader title={artifact.name} />
          <CardMedia style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={`.././public/artifactUploads/${artifact.fileName}`}></img>
          </CardMedia>
          <CardContent>{artifact.description ? artifact.description : ''}</CardContent>
        </Card>
      </Link>
    </Container>
  );
};

export default ArtifactCard;
