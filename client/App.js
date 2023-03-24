import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Routes from './Routes';
import { Container, createTheme, ThemeProvider } from '@material-ui/core';
import Layout from './Layout';
import { logout } from './store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#424242',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif;',
    h1: {
      fontFamily: 'Orbitron, sans-serif',
    },
    h2: {
      fontFamily: 'Orbitron, sans-serif',
    },
    h4: {
      fontFamily: 'Orbitron, sans-serif',
    },
    h5: {
      fontFamily: 'Orbitron, sans-serif',
    },
    body1: {
      color: '#424242',
    },
    body2: {
      color: 'white',
    },
  },
});

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector(state => state);
  const handleMyAccount = () => {
    if (auth.id) {
      history.push(`/users/${auth.id}`);
      window.location.reload();
    } else {
      history.push('/login');
    }
  };

  const handleLogout = () => {
    dispatch(logout);
    console.log('client has been logged out');
  };
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: 80,
        }}
      >
        {/* <Link to="/">Home</Link>
        <Link to="/communities">Communities</Link>
        <Link to="/findfriends">Find Friends</Link>
        <Link to="/myfriends">My Friends</Link>
        <Link to="/create-user">Create Account</Link>
        <Link to="/artifacts">Artifacts</Link>
        <Link to="/login">Log in</Link> */}
        <button onClick={handleMyAccount}>My Account</button>
        <button onClick={handleLogout}>Log out</button>
      </div>

      <ThemeProvider theme={theme}>
        <Layout auth={auth}>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Container>
  );
};

export default App;
