import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, makeStyles, AppBar, Toolbar } from '@material-ui/core';
// import { format } from 'date-fns';

const useStyles = makeStyles(theme => {
  return {
    // root: {
    //   display: 'flex',
    // },
    page: {
      marginTop: 80,
      background: 'white',
      width: '100%',
      // padding: theme.spacing(3),
    },
    appbar: {
      backgroundColor: theme.primary,
    },
    toolbar: theme.mixins.toolbar,
    // title: {
    //   flexGrow: 1,
    // },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={1}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            NOSTALGIA
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
