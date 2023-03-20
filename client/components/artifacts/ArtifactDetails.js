import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtifact } from '../../store';
import ArtifactDetailsCard from './ArtifactDetailsCard';
import ArtifactComments from './ArtifactComments';
import { Container, Typography, Grid } from '@material-ui/core';

const ArtifactDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchArtifact(id));
  }, []);

  const { artifacts } = useSelector(state => state);
  const artifact = artifacts;

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        {artifact.name}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8} md={8}>
          <ArtifactDetailsCard artifact={artifact} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <ArtifactComments id={id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArtifactDetails;
