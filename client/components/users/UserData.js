import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyFriendsList from "../friends/MyFriendsList";
import {
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: ".5rem",
    padding: 10,
  },
  specs: {
    color: "#66FCf1",
  },
  data: {
    color: "white",
    fontSize: "16pt",
  },
  buttons: {
    borderRadius: ".25rem",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "100%",
    margin: 5,
    backgroundColor: "#1f2833",
    border: "2pt solid #66FCF1",
    color: "white",
    fontFamily: "Exo 2, sans-serif",
  },
  friendscontainer: {
    backgroundColor: "#0b0c10ef",
    padding: 10,
  },
  closeButton: {
    width: "50%",
    margin: 5,
    backgroundColor: "#1f2833",
    border: "2pt solid #66FCF1",
    color: "white",
    fontFamily: "Exo 2, sans-serif",
  },
});

const UserData = ({ user, id }) => {
  const classes = useStyles();
  const { auth } = useSelector((state) => state);

  const [open, setOpen] = useState(false);

  const displayFriends = () => {
    setOpen(true);
  };
  const closeFriends = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" align="center">
        {user.firstName} {user.lastName}
      </Typography>

      <Typography className={classes.specs} variant="h6" align="center">
        {user.firstName}'s Age
      </Typography>
      <Typography className={classes.data} paragraph align="center">
        {user.age ? user.age + ` years old` : <span></span>}
      </Typography>
      <Typography className={classes.specs} variant="h6" align="center">
        {user.firstName}'s Location
      </Typography>
      <Typography className={classes.data} paragraph align="center">
        {user.location}
      </Typography>
      <Typography className={classes.specs} variant="h6" align="center">
        A little more about {user.firstName}
      </Typography>
      <Typography className={classes.data} paragraph align="center">
        {user.bio}
      </Typography>

      <Grid container spacing={2} className={classes.buttons}>
        {auth.id === id ? (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Link to={`/users/${user.id}/update-user`}>
              <Button className={classes.button}>EDIT PROFILE</Button>
            </Link>
          </Grid>
        ) : (
          <span></span>
        )}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Button className={classes.button} onClick={displayFriends}>
            FRIENDS
          </Button>
        </Grid>

        <Dialog open={open} user={user}>
          <Container className={classes.friendscontainer}>
            <Typography className={classes.text} paragraph></Typography>
            <Grid container spacing={2}>
              <MyFriendsList userId={id} />
            </Grid>

            <DialogActions>
              <Button
                className={classes.closeButton}
                variant="outlined"
                onClick={closeFriends}
              >
                Close
              </Button>
            </DialogActions>
          </Container>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default UserData;
