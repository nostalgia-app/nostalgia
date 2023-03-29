import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Dialog,
  DialogActions,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: 10,
  },
  text: {
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: '#1f2833',
    border: '2pt solid #66FCF1',
    color: 'white',
  },
});

const DialogBox = ({ user }) => {
  const classes = useStyles();

  const [dialog, setDialog] = useState(true);

  const closeDialog = () => {
    setDialog(false);
  };
  return (
    <>
      {!user.age || !user.location || !user.bio ? (
        <Dialog open={dialog}>
          <Container className={classes.container}>
            <Typography className={classes.text} variant="h4" align="center">
              Welcome to your account portal!
            </Typography>
            <Typography className={classes.text} variant="h6" align="center">
              Please click the "EDIT PROFILE" button.
            </Typography>
            <Typography className={classes.text} variant="h6" align="center">
              1. Populate your account info with the form.
            </Typography>
            <Typography className={classes.text} variant="h6" align="center">
              2. Upload a profile pic.
            </Typography>

            <DialogActions className={classes.text}>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={closeDialog}
              >
                Close
              </Button>
            </DialogActions>
          </Container>
        </Dialog>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default DialogBox;
