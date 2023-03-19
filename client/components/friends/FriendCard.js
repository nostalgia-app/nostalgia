import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardMedia, Grid, Button } from "@material-ui/core";

const FriendCard = ({ user }) => {
  return (
    <Grid item zeroMinWidth key={user.id}>
      <Card
        elevation={3}
        style={{
          color: "black",
          padding: 10,
          marginLeft: 20,
          width: 200,
          height: 200,
        }}
      >
        <Link to={`/friends/${user.id}`}>
          <CardMedia
            src={user.imageUrl}
            component="img"
            height="150"
            width="150"
            sx={{ padding: "1em 1em 0 1em" }}
          />
          <CardHeader title={user.username} />
        </Link>
        <Button variant="contained" sx={{ borderRadius: 50 }}>
          Add Friend
        </Button>
      </Card>
    </Grid>
  );
};

export default FriendCard;
