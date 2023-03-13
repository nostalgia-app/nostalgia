import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchCommunity } from '../../store';
import { Container, Typography } from '@material-ui/core';

const CommunityDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCommunity(id));
  }, []);

  const community = useSelector(state => state.community.community);

  return (
    // Page is wrapp in a container to start - keeps things spaced clean
    <Container>
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Community Details
      </Typography>
      <Typography variant="h5" gutterBottom>
        {community.name}
      </Typography>
      <Typography variant="h6">{community.bio}</Typography>
    </Container>
  );
};

export default CommunityDetails;
