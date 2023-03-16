import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  makeStyles,
  Container,
  CardMedia,
  CardActionArea,
  Button,
} from "@material-ui/core";

const UserCard = ({ user }) => {
  return (
    // card is wrapped in container to start - clean spacing
    // always try to use standard card elements: Header, Media, Content
    // card is wrapped in 'Link' to individual details page

    <Container>
      <Link to={`/users/${user.id}`}>
        <Card elevation={3} style={{ color: "black" }}>
          <CardMedia
            src={user.imageUrl}
            component="img"
            height="100"
            width="100"
            align="left"
          />
          <CardHeader title={user.username} />
          <CardActionArea>
            <Button variant="contained" sx={{ borderRadius: 50 }}>
              Add Friend
            </Button>
          </CardActionArea>
        </Card>
      </Link>
    </Container>
  );
};

export default UserCard;
