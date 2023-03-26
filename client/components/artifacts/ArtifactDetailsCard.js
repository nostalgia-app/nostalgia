import React from 'react';
import { updateArtifact } from '../../store';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '40vh',
    width: '100vw',
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#1f2833',
    marginTop: 5,
    color: 'white',
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
    //
    <Card elevation={3} style={{ padding: 10 }}>
      {/* <CardHeader title={artifact.name} /> */}
      <CardMedia src={artifact.fileName}>
        <div>
          <img
            src={`.././public/artifactUploads/${artifact.fileName}`}
            style={{ width: '100%' }}
          ></img>
        </div>
      </CardMedia>
      <CardContent>
        {artifact.description}
        <div style={{ marginTop: 10 }}>
          <Button
            className={classes.button}
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Like
          </Button>
          <span style={{ fontSize: 20, marginLeft: 10 }}>{artifact.likes}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtifactDetailsCard;
