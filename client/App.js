import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './Routes';
import {
  Container,
  createTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core';
import Layout from './Layout';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B0c10',
    },
    secondary: {
      main: '#1F2833',
    },
  },
  typography: {
    fontFamily: 'Exo 2, sans-serif',
    h1: {
      fontFamily: 'Exo 2, sans-serif',
    },
    h2: {
      fontFamily: 'Exo 2, sans-serif',
    },
    h4: {
      fontFamily: 'Exo 2, sans-serif',
    },
    h5: {
      fontFamily: 'Exo 2, sans-serif',
    },
    body1: {
      color: '#C5C6C7',
    },
    body2: {
      color: 'white',
    },
  },
});

const useStyles = makeStyles({
  mainContainer: {
    background: '#0a1017c0;',
    height: '100%',
    width: '100%',
    marginTop: 80,
    border: '2pt solid yellow',
  },
});

const App = () => {
  const classes = useStyles();
  const { auth } = useSelector(state => state);

  return (
    <Container className={classes.mainContainer}>
      <ThemeProvider theme={theme}>
        <Layout auth={auth}>
          <Routes />
          <Footer />
        </Layout>
      </ThemeProvider>
    </Container>
  );
};

export default App;
