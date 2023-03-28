import React from 'react';
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Toolbar,
  AppBar,
  Avatar,
} from '@material-ui/core';
import { format } from 'date-fns';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    page: {
      marginTop: 50,
    },
    appbar: {
      backgroundColor: '#0B0C10',
      display: 'flex',
      paddingTop: 5,
      paddingBottom: 5,
      fontFamily: 'Exo 2, sans-serif',
    },
    title: {
      fontFamily: 'Righteous, cursive',
      fontSize: '20pt',
      color: '#66FCf1',
      flexGrow: 1,
      marginBottom: 10,
    },
    navRight: {
      display: 'flex',
      margin: 5,
      padding: '5px',
    },
    avatarDiv: {
      display: 'flex',
      paddingLeft: 10,
    },
    text: {
      paddingTop: 7,
    },
    avatar: {
      marginLeft: 10,
    },
    date: {
      marginTop: 5,
      fontSize: '9pt',
    },
  };
});

const Layout = ({ children, auth }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <AppBar className={classes.appbar} elevation={3}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            NOSTALGIA
          </Typography>

          <Grid className={classes.navRight}>
            {auth.id ? (
              <Grid>
                <Grid className={classes.avatarDiv}>
                  <Typography className={classes.text}>
                    Hello {auth.firstName}
                  </Typography>
                  <Avatar
                    className={classes.avatar}
                    src={`.././public/profilePicUploads/${auth.profilePic}`}
                  />
                </Grid>
                <Grid>
                  <Typography className={classes.date}>
                    Today is {format(new Date(), 'MMMM do, Y')}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <span></span>
            )}
          </Grid>
        </Toolbar>
        <Navbar auth={auth} />
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}>{children}</div>
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
