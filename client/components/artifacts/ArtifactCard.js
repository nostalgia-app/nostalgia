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
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { removeArtifact, updateArtifact } from '../../store';

const ArtifactCard = ({ artifact }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
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
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <Card
        elevation={3}
        style={{ color: "black", padding: 10, marginLeft: 20, width: "95%" }}
      >
        {editMode ? (
          <TextField
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
            fullWidth
            variant="outlined"
            id="name"
            label="Artifact Name"
            name="name"
            defaultValue={data.name}
          />
        ) : (
          <CardHeader title={artifact.name} />
        )}
        <Link to={`/artifacts/${artifact.id}`}>
          <CardMedia style={{ display: "flex", justifyContent: "center" }}>
            <img src={`.././public/artifactUploads/${artifact.fileName}`}></img>
          </CardMedia>
        </Link>
        {editMode ? (
          <Box sx={{ mt: 2 }}>
            <TextField
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              fullWidth
              variant="outlined"
              id="description"
              label="Description"
              name="description"
              defaultValue={data.description}
            />
          </Box>
        ) : (
          <CardContent>
            {artifact.description ? artifact.description : ""}
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
          ""
        )}
      </Card>
    </Container>
  );
};

export default ArtifactCard;
