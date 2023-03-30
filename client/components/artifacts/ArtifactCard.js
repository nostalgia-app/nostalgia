import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Card,
  Grid,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';
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
    maxHeight: 700,
    borderRadius: '.5rem',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    backgroundColor: '#1f2833',
    color: 'white',
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 10,
  },
  image: {
    maxHeight: '250px',
    height: 200,
    objectFit: 'contain',
  },
  lowerContent: {
    display: 'flex',
    paddingLeft: 15,
    marginBottom: 10,
  },
  likeIcon: {
    marginTop: 7,
  },
  likes: {
    marginTop: 7,
    marginLeft: 5,
  },
  learnButton: {
    display: 'flex',
    justifyContent: 'right',
    width: '80%',
    margin: 'auto',
  },
  button: {
    backgroundColor: '#1f2833',
    color: 'white',
    fontFamily: 'Exo 2, sans-serif',
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
        <CardMedia className={classes.cardMedia}>
          <img
            className={classes.image}
            src={`.././public/artifactUploads/${artifact.fileName}`}
          ></img>
        </CardMedia>
        {editMode ? (
          <TextField
            onChange={e => setData({ ...data, description: e.target.value })}
            fullWidth
            variant="outlined"
            id="description"
            label="Description"
            name="description"
            defaultValue={data.description}
          />
        ) : (
          <Grid className={classes.cardContent}>
            <CardContent>
              {artifact.description ? artifact.description : ''}
            </CardContent>
            <Grid className={classes.lowerContent}>
              <Grid className={classes.likeIcon}>Likes</Grid>
              <Grid className={classes.likes}>{artifact.likes}</Grid>
              <Grid className={classes.learnButton}>
                <Link to={`/artifacts/${artifact.id}`}>
                  <Button className={classes.button} variant="contained">
                    Learn More
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        )}
        {artifact.userId === auth.id ? (
          <CardActions>
            <Button
              size="small"
              onClick={() => dispatch(removeArtifact(artifact.id))}
            >
              Remove
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => editArtifact()}
            >
              Edit
            </Button>
            {editMode && (
              <Button
                variant="contained"
                size="small"
                onClick={() => saveArtifact()}
              >
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
