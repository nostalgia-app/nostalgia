import React from 'react';
import { updateArtifact } from '../../store';
import { useDispatch } from 'react-redux';
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import { ThumbUp } from '@mui/icons-material';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 30,
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lowerRow: {
    paddingTop: 5,
    display: 'flex',
  },
  likes: {
    paddingLeft: 7,
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
      <CardMedia className={classes.cardMedia} src={artifact.fileName}>
        <div>
          <img
            src={`.././public/artifactUploads/${artifact.fileName}`}
            style={{ width: '100%' }}
          ></img>
        </div>
      </CardMedia>
      <CardContent className={classes.content}>
        {artifact.description}
        <Grid className={classes.lowerRow}>
          <Grid className={classes.icon}>
            <ThumbUp onClick={handleClick} />
          </Grid>
          <Grid className={classes.likes}>{artifact.likes}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ArtifactDetailsCard;
