import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import { createArtifact } from "../../store";

const ArtifactUpload = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auth } = useSelector(state => state);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("communityId", id);
    data.append("userId", auth.id);
    data.append("file", file);
    dispatch(createArtifact(data));
  };

  return (
    <Container style={{ display: "flex", marginBottom: 30 }}>
      <Grid>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            label="Artifact Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            margin="normal"
            variant="outlined"
            multiline
            minRows={5}
          />
          <TextField
            type="file"
            accept=".jpg, .jpeg, .png"
            variant="outlined"
            onChange={(e) => {
              const file = e.target.files[0];
              setFile(file);
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
