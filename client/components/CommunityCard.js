import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const CommunityCard = (props) => {
  const { community } = props;
  return (
    <Grid item sx={{ width: 1 / 3 }} key={community.id}>
      <Link to={`/communities/${community.id}`}>
        <Typography>{community.name}</Typography>
        <img id="communityCardImg" src={community.imageUrl} />
      </Link>
    </Grid>
  );
};

export default CommunityCard;
