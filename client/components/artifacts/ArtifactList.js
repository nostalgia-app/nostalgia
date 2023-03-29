import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Grid,
  Container,
  Button,
  makeStyles,
  Dialog,
  DialogActions,
} from '@material-ui/core';
import { setArtifacts } from '../../store';
import ArtifactCard from './ArtifactCard';
import ArtifactUpload from './ArtifactUpload';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 20,
  },
  uploadButton: {
    width: '50%',
    backgroundColor: 'rgb(115, 115, 115)',
    '&:hover': {
      backgroundColor: 'white',
      color: '#1f2833',
    },
    marginTop: 5,
    color: 'white',
    fontWeight: 800,
  },
  cardsGrid: {
    marginTop: 20,
    marginBottom: 50,
  },
});

const ArtifactList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auth } = useSelector(state => state);
  const { artifacts } = useSelector(state => state.artifacts);

  useEffect(() => {
    dispatch(setArtifacts(id));
  }, []);

  const [open, setOpen] = useState(false);

  const openUploadArtifact = () => {
    setOpen(true);
  };
  const closeUploadArtifact = () => {
    setOpen(false);
  };
  return (
    <Container className={classes.container}>
      <Dialog open={open}>
        <Container className={classes.uploadscontainer}>
          <Typography className={classes.text} paragraph></Typography>
          <Grid container spacing={2}>
            <ArtifactUpload />
          </Grid>

          <DialogActions>
            <Button
              className={classes.uploadsButton}
              variant="outlined"
              onClick={closeUploadArtifact}
            >
              Close
            </Button>
          </DialogActions>
        </Container>
      </Dialog>

      <Grid className={classes.cardsGrid} container spacing={2}>
        {artifacts.map(artifact => {
          return (
            <Grid item key={artifact.id} xs={12} sm={6} md={6}>
              <ArtifactCard artifact={artifact} />
            </Grid>
          );
        })}
      </Grid>
      {auth.id ? (
        <Button className={classes.uploadButton} onClick={openUploadArtifact}>
          Upload A New Artifact
        </Button>
      ) : (
        <span>Please login if you wold like to create an artifact.</span>
      )}
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
