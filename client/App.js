import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './Routes';
import { Container, createTheme, ThemeProvider } from '@material-ui/core';
import Layout from './Layout';

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
  const { auth } = useSelector(state => state);

  return (
    <Container>
      <div style={{ marginTop: 80 }} />
      <ThemeProvider theme={theme}>
        <Layout auth={auth}>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Container>
  );
};

export default App;
