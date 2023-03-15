import React from 'react';
import { Grid } from '@material-ui/core';

const UserMedia = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgb(241, 241, 241)',
          borderRadius: '.25rem',
          height: '30%',
          backgroundImage: `url(.././public/artifactUploads/bostonFamily.jpeg)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          marginBottom: 10,
        }}
      >
        Top Right
      </div>
      <div
        style={{
          backgroundColor: 'rgb(241, 241, 241)',
          borderRadius: '.25rem',
          height: '30%',
          marginBottom: 10,
          padding: 5,
        }}
      >
        My Communities
      </div>
      <div
        style={{
          backgroundColor: 'rgb(241, 241, 241)',
          borderRadius: '.25rem',
          height: '30%',
          padding: 5,
        }}
      >
        My Artifacts
      </div>
    </>
  );
};

export default UserMedia;
