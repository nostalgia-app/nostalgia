import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Container, TextField } from '@material-ui/core';
import { setArtifacts } from '../../store';
import ArtifactCard from './ArtifactCard';
import ArtifactUpload from './ArtifactUpload';

// IMAGES DATA HAS BEEN USED FOR TESTING UPLOADS - REPLACE WITH ARTIFACT DATA

const ArtifactList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auth, artifacts } = useSelector(state => state);

  // pulled image data
  useEffect(() => {
    dispatch(setArtifacts(id));
  }, []);
  const imageData = useSelector(state => state.image);
  const images = imageData.images;
  console.log(images);

  return (
    // Page is wrapp in a container - clean spacing
    <Container>
      {/* Start the actual page content with a basic title */}
      {/* <Typography align="center" variant="h3" component="h1" gutterBottom>
        Artifact List
      </Typography> */}

      {/*
      /search field - search logic commented out at bottom, implemented when data ready
      */}

      {/* <div style={{ marginLeft: 35, marginBottom: 20 }}>
        <form>
          <TextField
            onChange={e => setSearch(e.target.value)}
            label="search artifacts"
            variant="outlined"
            color="primary"
          ></TextField>
        </form>
      </div> */}

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

      {/* Set Grid and Map through the data - use card component to render */}
      <Grid
        container
        spacing={2}
        style={{
          borderRadius: '.25rem',
          marginTop: 20,
        }}
      >
        {artifacts.map(artifact => {
          return (
            <Grid item key={artifact.id} xs={12} md={4}>
              <ArtifactCard artifact={artifact} />
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
