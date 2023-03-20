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

  useEffect(() => {
    dispatch(setArtifacts(id));
  }, []);
  return (
    // Page is wrapp in a container - clean spacing
    <Container>
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
