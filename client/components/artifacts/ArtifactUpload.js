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
  makeStyles,
} from '@material-ui/core';
import { createArtifact } from '../../store';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '.25rem',
  },
  button: {
    backgroundColor: '#1f2833',
    border: '2pt solid #66FCf1',
    marginTop: 5,
    color: 'white',
  },
});

const ArtifactUpload = () => {
  const classes = useStyles();
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
    window.location.reload();
  };

  return (
    <Container className={classes.mainContainer} maxWidth="xs">
      <Typography component="h1" variant="h5">
        Upload a New Artifact
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
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
              className={classes.input}
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
              className={classes.input}
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
              className={classes.button}
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
    </Container>
  );
};

export default ArtifactUpload;
