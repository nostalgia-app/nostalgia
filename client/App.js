import React from "react";
import { Link } from "react-router-dom";
// import Navbar from './components/Navbar';
import Routes from "./Routes";
import { Container } from "@material-ui/core";
import Layout from "./Layout";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { logout } from "./store";
import { useDispatch } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#424242",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif;",
    h1: {
      fontFamily: "Orbitron, sans-serif",
    },
    h2: {
      fontFamily: "Orbitron, sans-serif",
    },
    h4: {
      fontFamily: "Orbitron, sans-serif",
    },
    h5: {
      fontFamily: "Orbitron, sans-serif",
    },
    body1: {
      color: "#424242",
    },
    body2: {
      color: "white",
    },
  },
});

const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout);
    console.log("client has been logged out");
  };
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 80,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/findfriends">Find Friends</Link>
        <Link to="/friends">My Friends</Link>
        <Link to="/communities">Communities</Link>
        <Link to="/create-user">Create Account</Link>
        <Link to="/artifacts">Artifacts</Link>
        <Link to="/login">Log in</Link>
        <button onClick={handleClick}>Log out</button>
      </div>

      <ThemeProvider theme={theme}>
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Container>
  );
};

export default App;
