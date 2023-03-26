import React from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  Toolbar,
  AppBar,
} from '@material-ui/core';
import { format } from 'date-fns';
import Navbar from './components/navbar/Navbar';

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
    },
    page: {
      marginTop: 50,
    },
    appbar: {
      backgroundColor: '#0B0C10',
      display: 'flex',
      paddingTop: 10,
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
      flexDirection: 'column',
      margin: 5,
      padding: '5px',
    },
    date: {
      color: 'white',
    },
  };
});

const Layout = ({ children, auth }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={3}>
        <Grid></Grid>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            NOSTALGIA
          </Typography>

          <div className={classes.navRight}>
            <Typography>
              {/* <span className={classes.date}> */}
              <span className="nostalgia__navbar-date">
                Today is {format(new Date(), 'MMMM do, Y')}
              </span>
            </Typography>
          </div>
        </Toolbar>
        <Navbar auth={auth} />
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
