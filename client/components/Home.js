import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  styled,
  Link,
} from "@material-ui/core";
import { TravelExplore, Handshake, AddToPhotos } from "@mui/icons-material";
const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    color: "green"[500],
  },
}));

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100%",
  },
  heading: {
    fontFamily: "Righteous, cursive",
    color: "#66FCf1",
  },
  title: {
    fontSize: "30",
    fontFamily: "Exo 2, sans-serif",
  },
  topRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
    marginBottom: 70,
  },
  bodyFont: {
    fontFamily: "Exo 2, sans-serif",
    marginBottom: 10,
  },
  bottomRow: {
    backgroundColor: "#0b0c10d6",
    padding: 20,
    marginBottom: 50,
    borderRadius: ".5rem",
  },
  subTitle: {
    color: "#66FCf1",
  },
  features: {
    borderLeft: "2pt solid white",
    paddingLeft: 30,
  },
  titleIcon: {
    display: "flex",
  },
  icon: {
    paddingLeft: 12,
    paddingTop: 5,
  },
});

export const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid className={classes.topRow} container spacing={0}>
        <Grid item xs={12} sm={12} md={12}>
          <Responsive>
            <Typography variant="h1" className={classes.heading} align="center">
              NOSTALGIA
            </Typography>
          </Responsive>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            className={classes.bodyFont}
            variant="h6"
            component="h1"
            gutterBottom
          >
            <strong style={{ color: "#66FCf1" }}>nost•tal•gia</strong> - a
            wistful desire to return in thought or in fact to a former time in
            one's life, to one's home or homeland, or to one's family and
            friends: a sentimental yearning for the happiness of a former place
            or time:
          </Typography>
          <br></br>

          <Typography className={classes.bodyFont} variant="h6">
            Nostalgia builds community by creating a platform where families and
            friends can stitch together artifacts, stories, and connections to
            create memories.
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.bottomRow} container spacing={2}>
        <Grid className={classes.features} item xs={12} sm={12} md={4}>
          <Grid className={classes.titleIcon}>
            <Link href="/communities" className={classes.subTitle} variant="h5">
              Explore
            </Link>
            <TravelExplore className={classes.icon} color="white" />
          </Grid>

          <Typography paragraph>
            Unique communities based on geography, school experience, hobbies,
            clube etc.
          </Typography>
        </Grid>
        <Grid className={classes.features} item xs={12} sm={12} md={4}>
          <Grid className={classes.titleIcon}>
            <Link href="/findfriends" className={classes.subTitle} variant="h5">
              Connect
            </Link>
            <Handshake className={classes.icon} color="white" />
          </Grid>
          <Typography paragraph>
            Join members to build communities around lived experience, stories,
            life and love.
          </Typography>
        </Grid>
        <Grid className={classes.features} item xs={12} sm={12} md={4}>
          <Grid className={classes.titleIcon}>
            <Link href="/artifacts" className={classes.subTitle} variant="h5">
              Share
            </Link>
            <AddToPhotos className={classes.icon} color="white" />
          </Grid>
          <Typography paragraph>
            Post and share artifacts, media, images and fun stories to enrich
            your community.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
