import React, { useState } from 'react';
import { Typography, Button, Dialog, DialogActions } from '@material-ui/core';

const DialogBox = ({ user }) => {
  const [dialog, setDialog] = useState(true);
  const closeDialog = () => {
    setDialog(false);
  };
  return (
    <>
      {!user.age || !user.location || !user.bio ? (
        <Dialog open={dialog}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ color: 'black', padding: 20 }}
          >
            Welcome to your account portal!
          </Typography>
          <Typography paragraph align="center">
            Please take a moment to let us know a little more about you.
          </Typography>
          <Typography paragraph align="center">
            1. Populate your additional account info with the form.
          </Typography>
          <Typography paragraph align="center">
            2. Upload a profile pic.
          </Typography>

          <DialogActions>
            <Button onClick={closeDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default DialogBox;
