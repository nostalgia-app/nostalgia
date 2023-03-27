import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { removeArtifact, updateArtifact } from '../../store';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  card: {
    marginTop: 5,
    marginBottom: 5,
    maxHeight: 500,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 0,
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1em 1em 0 1em',
  },
  image: {
    maxHeight: '250px',
    height: 200,
    objectFit: 'contain',
  },
  cardContent: {
    height: 100,
  },
});

const ArtifactCard = ({ artifact }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const [data, setData] = useState(artifact);
  const [editMode, setEditMode] = useState(false);

  const editArtifact = () => {
    setEditMode(true);
  };

  const saveArtifact = () => {
    setEditMode(false);
    dispatch(updateArtifact(data));
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.card} elevation={2}>
        {editMode ? (
          <TextField
            onChange={e => setData({ ...data, name: e.target.value })}
            required
            fullWidth
            variant="outlined"
            id="name"
            label="Artifact Name"
            name="name"
            defaultValue={data.name}
          />
        ) : (
          <CardHeader className={classes.header} title={artifact.name} />
        )}
        <Link to={`/artifacts/${artifact.id}`}>
          <CardMedia className={classes.cardMedia}>
            <img
              className={classes.image}
              src={`.././public/artifactUploads/${artifact.fileName}`}
            ></img>
          </CardMedia>
        </Link>
        {editMode ? (
          <Box sx={{ mt: 2 }}>
            <TextField
              onChange={e => setData({ ...data, description: e.target.value })}
              fullWidth
              variant="outlined"
              id="description"
              label="Description"
              name="description"
              defaultValue={data.description}
            />
          </Box>
        ) : (
          <CardContent className={classes.cardContent}>
            {artifact.description ? artifact.description : ''}
          </CardContent>
        )}
        {artifact.userId === auth.id ? (
          <CardActions>
            <Button
              size="small"
              onClick={() => dispatch(removeArtifact(artifact.id))}
            >
              Remove
            </Button>
            <Button size="small" onClick={() => editArtifact()}>
              Edit
            </Button>
            {editMode && (
              <Button size="small" onClick={() => saveArtifact()}>
                Save
              </Button>
            )}
          </CardActions>
        ) : (
          ''
        )}
      </Card>
    </Container>
  );
};

export default ArtifactCard;
