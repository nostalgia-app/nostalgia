import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';
import { fetchArtifact } from '../../store';
import ArtifactDetailsCard from './ArtifactDetailsCard';
import ArtifactComments from './ArtifactComments';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    paddingTop: 50,
    marginBottom: 50,
  },
});

const ArtifactDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchArtifact(id));
  }, []);

  const { artifacts } = useSelector(state => state);
  const artifact = artifacts.artifact;

  return (
    <Container className={classes.container}>
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
