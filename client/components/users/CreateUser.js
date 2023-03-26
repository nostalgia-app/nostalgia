import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../store";
import { useHistory } from "react-router-dom";

import {
  Container,
  Button,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
});

const CreateUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createNewUser({
        firstName: firstName,
        lastName: lastName,
        username: userName,
        password: password,
      })
    );
    history.push("/login");
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Please create an account
      </Typography>
      <Grid>
        <Grid item xs={12} sm={12} md={12}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setUserName(e.target.value)}
              label="Username"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              margin="normal"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateUser;
