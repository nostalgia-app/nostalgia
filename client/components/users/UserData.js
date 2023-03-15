import React from 'react';

import UpdateUser from './UpdateUser';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  data: {
    backgroundColor: 'rgb(241, 241, 241)',
    color: 'black',
    marginBottom: 15,
  },
});
/////////////////////////////////////////

const UserData = ({ user }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <div className={classes.data}>
          <Typography variant="h5">
            LOCATION<br></br>
            <span style={{ fontSize: '12pt' }}>{user.location}</span>
          </Typography>
        </div>
        {/*
        /
        /*/}
        <div className={classes.data}>
          <Typography variant="h5">
            AGE<br></br>
            <span style={{ fontSize: '12pt' }}>
              {user.age ? user.age + ` years old` : <span></span>}
            </span>
          </Typography>
        </div>
        {/*
        /
        /*/}
        <div className={classes.data}>
          <Typography variant="h5">
            ABOUT {user.firstName}
            <br></br>
            <span style={{ fontSize: '12pt' }}>{user.bio}</span>
          </Typography>
        </div>
        {/*
        /
        /*/}
        <Grid
          item
          style={{
            marginTop: '20px',
          }}
        >
          Update Account Info
          <UpdateUser user={user} />
        </Grid>
      </Grid>
    </>
  );
};

export default UserData;
