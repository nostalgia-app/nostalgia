import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, TextField } from '@material-ui/core';
import CommunityCard from './CommunityCard';

const CommunityList = () => {
  return (
    // Page is wrapp in a container - clean spacing
    <Container>
      {/* Start the actual page content with a basic title */}
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Community List
      </Typography>

      {/*
      /search field - search logic commented out at bottom, implemented when data ready
      */}

      <form>
        <TextField
          onChange={e => setSearch(e.target.value)}
          label="search communities"
          variant="outlined"
          color="primary"
        ></TextField>
      </form>
      <Typography align="center" style={{ marginTop: 20 }}>
        * When we have community data we'll map through below with use of card
        comp...
      </Typography>

      {/* Set Grid and Map through the data - use card component to render */}
      {/* <Grid container spacing={2}>
        {communities.map(community => {
          return (
            <Grid item key={community.id} xs={12} md={4}>
              <CommunityCard community={community} />
            </Grid>
          );
        })}
      </Grid> */}
    </Container>
  );
};

export default CommunityList;

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
