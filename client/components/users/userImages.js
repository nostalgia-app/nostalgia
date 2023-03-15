import React, { useEffect } from 'react';
import { fetchImages } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import ArtifactCard from '../artifacts/ArtifactCard';

const UserImages = () => {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchImages);
  }, []);
  const imageData = useSelector(state => state.image);
  const images = imageData.images;
  console.log(images);
  //
  //
  return (
    <>
      {/* <Grid
        container
        spacing={3}
        style={{ border: '2pt solid green', marginTop: 20 }}
      > */}
      UserImages
      {images.map(image => {
        return (
          <Grid item key={image.id} xs={12} md={4}>
            <ArtifactCard image={image} />
          </Grid>
        );
      })}
      {/* </Grid> */}
    </>
  );
};

export default UserImages;
