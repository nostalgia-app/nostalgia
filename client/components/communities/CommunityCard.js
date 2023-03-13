import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardHeader, CardContent } from '@material-ui/core';

const CommunityCard = ({ community }) => {
  return (
    // card is wrapped in container to start - clean spacing
    // always try to use standard card elements: Header, Media, Content
    // card is wrapped in 'Link' to individual details page

    <Container>
      {/* <Link to={`/communities/${community.id}`}> */}
      <Card
        elevation={3}
        style={{ color: 'black', padding: 10, marginLeft: 20, width: '95%' }}
      >
        <CardHeader title={community.name} />
        <CardMedia>Media section is good for images...</CardMedia>
        <CardContent>
          Content seciond is good for text, buttons etc.
        </CardContent>
      </Card>
      {/* </Link> */}
    </Container>
  );
};

export default CommunityCard;
