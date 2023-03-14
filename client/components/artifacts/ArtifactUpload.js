import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewImage } from '../../store';
import { TextField, Button, Grid, Container } from '@material-ui/core';

const ArtifactUpload = () => {
  //
  const dispatch = useDispatch();
  // state variables are set with form, then appended to 'data' object for 'createNew'
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('file', file);
    dispatch(createNewImage(data));
    console.log('uploaded');
  };
  return (
    // Page is wrapped in a container to start - keeps things spaced clean
    <Container style={{ display: 'flex', marginBottom: 30, width: '30%' }}>
      <Grid>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            onChange={e => setTitle(e.target.value)}
            label="artifact name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            onChange={e => setDescription(e.target.value)}
            label="description"
            margin="normal"
            variant="outlined"
            multiline
            minRows={5}
          />

          <TextField
            type="file"
            accept=".jpg, .jpeg, .png"
            variant="outlined"
            onChange={e => {
              const file = e.target.files[0];
              setFile(file);
              console.log(file);
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Upload
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default ArtifactUpload;
