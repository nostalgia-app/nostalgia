import React from "react";
import { Container, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        nost•tal•gia -
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        a wistful desire to return in thought or in fact to a former time in
        one's life, to one's home or homeland, or to one's family and friends: a
        sentimental yearning for the happiness of a former place or time:
      </Typography>
      <br></br>
      <Typography variant="h6">
        Nostalgia builds community by creating a platform where families and
        friends can stitch together artifacts, stories, and connections to
        create memories.
      </Typography>

      <div
        style={{
          backgroundColor: "rgb(241, 241, 241)",
          borderRadius: ".25rem",
          marginTop: 30,
        }}
      ></div>
    </Container>
  );
};

export default Home;
