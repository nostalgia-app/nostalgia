import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, makeStyles, Container } from '@material-ui/core';

const UserCard = ({ user }) => {
  return (
    <Container>
      <Link to={`/users/${user.id}`}>
        <Card elevation={3} style={{ color: 'black' }}>
          <CardHeader title={user.username} />
        </Card>
      </Link>
    </Container>
  );
};

export default UserCard;
