import React, { useEffect, useState } from 'react';
import { fetchImages } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import ArtifactCard from './ArtifactCard';
import ArtifactUpload from './ArtifactUpload';
import { Typography, Grid, Container, TextField } from '@material-ui/core';

// IMAGES DATA HAS BEEN USED FOR TESTING UPLOADS - REPLACE WITH ARTIFACT DATA

const ArtifactList = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  // pulled image data
  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  const imageData = useSelector(state => state.image);
  const images = imageData.images;

  return (
    // Page is wrapp in a container - clean spacing
    <Container>
      {/* Start the actual page content with a basic title */}
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Artifact List
      </Typography>

      {/*
      /search field - search logic commented out at bottom, implemented when data ready
      */}

      <div style={{ marginLeft: 35, marginBottom: 20 }}>
        <form>
          <TextField
            onChange={e => setSearch(e.target.value)}
            label="search artifacts"
            variant="outlined"
            color="primary"
          ></TextField>
        </form>
      </div>

      {/* 
      / Log-in protected ArtifactUpload component placed in it's own Grid
      */}

      {auth.id ? (
        <Grid>
          <ArtifactUpload />
        </Grid>
      ) : (
        <span>'You must be logged in to create an artifact'</span>
      )}
      {/*
      /
      /
      /
      */}

      {/* Set Grid and Map through the data - use card component to render */}
      <Grid
        container
        spacing={2}
        style={{
          borderRadius: '.25rem',
          marginTop: 20,
        }}
      >
        {images.map(image => {
          return (
            <Grid item key={image.id} xs={12} md={4}>
              <ArtifactCard image={image} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ArtifactList;

// // set a search & searchResults state
// const [search, setSearch] = useState('');
// const [searchResults, setSearchResults] = useState([]);
// // filter the data based on textFiled input
// useEffect(() => {
//   const filteredArtifacts = images.filter(artifact =>
//     artifact.title.toLowerCase().includes(search.toLocaleLowerCase())
//   );
//   setSearchResults(filteredArtifacts);
// }, [images, search]);
