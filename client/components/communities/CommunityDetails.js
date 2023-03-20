import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setArtifacts } from '../../store';
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  Box,
} from '@material-ui/core';
import { setCommunity } from '../../store';
import { useHistory } from 'react-router-dom';
import ArtifactList from '../artifacts/ArtifactList';

const CommunityDetails = () => {
  const { id } = useParams();
  const { community } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCommunity(id));
  }, [id]);

  const history = useHistory();
  const routeChange = () => {
    let path = `/communities/`;
    history.push(path);
  };

  useEffect(() => {
    dispatch(setArtifacts(id));
  }, []);
  const { artifacts } = useSelector(state => state);
  console.log(artifacts);

  return (
    <Container>
      <Card
        elevation={3}
        style={{
          color: 'black',
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
    </Container>
  );
};

export default CommunityDetails;
