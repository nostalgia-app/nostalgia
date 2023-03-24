import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setArtifacts, addUserToCommunity, me } from "../../store";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  Box,
} from "@material-ui/core";
import { setCommunity } from "../../store";
import { useHistory } from "react-router-dom";
import ArtifactList from "../artifacts/ArtifactList";
import EditCommunity from "./EditCommunity";

const CommunityDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const routeChange = () => {
    let path = `/communities/`;
    history.push(path);
  };

  useEffect(() => {
    dispatch(setCommunity(id));
  }, [id]);

  useEffect(() => {
    dispatch(setArtifacts(id));
  }, []);
  useEffect(() => {
    dispatch(me());
  }, []);
  const { artifacts, auth, community } = useSelector(state => state);
  console.log(artifacts);
  console.log('curr user', auth)

  return (
    <Container>
      <Card
        elevation={3}
        style={{
          color: "black",
          padding: 30,
        }}
      >
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          {community.name}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          style={{ padding: 10 }}
        >
          <Button variant="contained" sx={{ borderRadius: 50 }}>
            Join
          </Button>
          {auth.id === community.adminId ? (
            <Button
              variant="contained"
              sx={{ borderRadius: 50 }}
              onClick={handleClickOpen}
            >
              Edit Details
            </Button>
          ) : (
            ""
          )}
          <Button
            variant="contained"
            sx={{ borderRadius: 50 }}
            onClick={routeChange}
          >
            Back
          </Button>
        </Box>

        <CardMedia
          src={community.imageUrl}
          component="img"
          style={{ maxHeight: 500 }}
        />
        <Typography variant="h5" gutterBottom></Typography>
        <Typography variant="h6">{community.bio}</Typography>
      </Card>
      <Box sx={{ mt: 5 }}>
        <ArtifactList artifacts={artifacts} />
      </Box>
      <EditCommunity community={community} open={open} onClose={handleClose} />
    </Container>
  );
};

export default CommunityDetails;
