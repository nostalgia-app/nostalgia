import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const CommunityCard = (props) => {
  const { community } = props;
  return (
    <Grid item key={community.id}>
      <Link to={`/communities/${community.id}`}>
        <h3>{community.name}</h3>
        <img id="communityCardImg" src={community.imageUrl} />
      </Link>
    </Grid>
  );
};

export default CommunityCard;
