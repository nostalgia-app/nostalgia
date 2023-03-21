import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from '@material-ui/core';
import { createArtifact } from '../../store';

const ArtifactUpload = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auth } = useSelector(state => state);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    const communityId = id;
    data.append('name', name);
    data.append('description', description);
    data.append('userId', auth.id);
    data.append('file', file);
    dispatch(createArtifact(data, communityId));
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Upload a New Artifact
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={e => setName(e.target.value)}
                required
                fullWidth
                variant="outlined"
                id="name"
                label="Artifact Name"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setDescription(e.target.value)}
                fullWidth
                variant="outlined"
                id="description"
                label="Description"
                name="description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => {
                  const file = e.target.files[0];
                  setFile(file);
                }}
                fullWidth
                variant="outlined"
                type="file"
                id="file"
                name="file"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ m: 3 }}
              >
                Submit Artifact
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ArtifactUpload;
