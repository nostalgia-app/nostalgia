import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Button,
  makeStyles,
} from '@material-ui/core';
import { ThumbUp } from '@mui/icons-material';
import { updateArtifact } from '../../store';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40vh',
    width: '100vw',
    paddingTop: 50,
  },
  like: {
    paddingTop: 10,
    display: 'flex',
  },
  likes: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: '16pt',
  },
  icon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#1f2833',
    marginTop: 5,
    color: 'white',
    marginLeft: 10,
  },
});

const ArtifactDetailsCard = ({ artifact }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(updateArtifact({ id: artifact.id, likes: artifact.likes + 1 }));
    window.location.reload();
  };

  return (
    <Card elevation={3} style={{ padding: 10 }}>
      <CardMedia src={artifact.fileName}>
        <div>
          <img
            src={`.././public/artifactUploads/${artifact.fileName}`}
            style={{ width: '100%' }}
          ></img>
        </div>
      </CardMedia>
      <CardContent className={classes.content}>
        {artifact.description}
        <Grid className={classes.like}>
          <Button
            className={classes.button}
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Like
          </Button>
          <Grid className={classes.likes}>{artifact.likes}</Grid>
          <Grid className={classes.icon}>
            <ThumbUp color="#1f2833" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ArtifactDetailsCard;
