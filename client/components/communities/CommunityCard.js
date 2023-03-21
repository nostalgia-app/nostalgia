import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  Typography,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CommunityCard = (props) => {
  const { community } = props;

  const history = useHistory();
  const routeChange = () => {
    let path = `/communities/${community.id}`;
    history.push(path);
  };

  return (
    <Card
      elevation={3}
      style={{
        color: "black",
        padding: 10,
        marginLeft: 20,
        width: 350,
        height: 350,
      }}
    >
      <CardActionArea>
        <Link to={`/communities/${community.id}`}>
          <CardMedia
            src={community.imageUrl}
            component="img"
            height="250"
            width="250"
            sx={{ padding: "1em 1em 0 1em" }}
          />
          <Typography align="center" style={{ overflowWrap: "break-word" }}>
            {community.name}
          </Typography>
        </Link>
      </CardActionArea>
      <CardContent>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Button variant="contained" sx={{ borderRadius: 50 }}>
            Join
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: 50 }}
            onClick={routeChange}
          >
            Learn
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
