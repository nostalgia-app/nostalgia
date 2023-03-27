import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#0B0C10',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    border: '2pt solid orange',
  },
  footerTitle: {
    fontFamily: 'Righteous, cursive',
    color: '#66FCf1',
  },
});

const Footer = () => {
  const classes = useStyles();
  const today = new Date();

  return (
    <footer className={classes.footer}>
      <Typography className={classes.footerTitle}>NOSTALGIA</Typography>
      <Typography paragraph align="center">
        Copyright &copy; {today.getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
