import React, { useEffect } from 'react';
import { fetchUser } from '../../store';
import { setCommunities } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import UpdateUser from './UpdateUser';
import DialogBox from './DialogueBox';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';
import UserData from './UserData';
import UserProfilePic from './UserProfilePic';
import ProfilePicUpload from './ProfilePicUpload';
import UserCommunities from './UserCommunities';
import UserArtifacts from './UserArtifacts';

const UserDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  useEffect(() => {
    dispatch(setCommunities());
  }, []);

  const { user } = useSelector(state => state);
  const currentUser = user.user;

  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Hello {currentUser.firstName}
        </Typography>
        <Typography align="center">
          Today is {format(new Date(), 'MMMM do, Y')}
        </Typography>
        {!user.age || !user.location || !user.bio ? (
          <DialogBox user={user} />
        ) : (
          <span></span>
        )}

        <UpdateUser user={user} />
      </Container>
    </>
  );
};

export default UserDetails;
