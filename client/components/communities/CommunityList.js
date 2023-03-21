<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addCommunity, setCommunities, setGeography } from "../../store";
import CommunityCard from "./CommunityCard";
=======
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addCommunity, setCommunities, setGeography } from '../../store';
import CommunityCard from './CommunityCard';
>>>>>>> main

import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const CommunityList = () => {
<<<<<<< HEAD
  const { communities, auth } = useSelector((state) => state);
=======
  const { communities, geographies, auth } = useSelector(state => state);
>>>>>>> main
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCommunities());
  }, []);

  // Add Community Dialog
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Add Community Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    // const imgFile = new FormData();
    // imgFile.append("file", file);
    const community = { ...data, adminId: auth.id, imageUrl: imgFile.path };
    dispatch(addCommunity(community));
    reset();
  };

  // Filter Category
<<<<<<< HEAD
  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = communities.filter((community) => {
      if (e.target.value === "") return community;
      return (
        community.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        community.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        community.address.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setstate({
      query: e.target.value,
      list: results,
    });
=======
  const [location, setLocation] = React.useState('');

  const handleChange = event => {
    setLocation(event.target.value);
  };

  const resetValue = () => {
    setLocation('');
>>>>>>> main
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography align="Left" variant="h3" component="h1" gutterBottom>
          Find a Community!
        </Typography>
        {auth.id && (
          <Button
            variant="contained"
            sx={{ borderRadius: 50 }}
            onClick={handleClickOpen}
          >
            Add New Community
          </Button>
        )}
      </Box>

      <Box sx={{ minWidth: 200, mt: 10, mb: 10 }}>
        <FormControl fullWidth>
          <TextField
            value={state.query}
            type="search"
            label="Location"
            onChange={handleChange}
<<<<<<< HEAD
          ></TextField>
=======
          >
            {geographies.length > 0 ? (
              geographies.map(geography => (
                <MenuItem key={geography.state} value={geography.state}>
                  {geography.state}
                </MenuItem>
              ))
            ) : (
              <MenuItem>No Items to Select</MenuItem>
            )}
          </Select>
          <Button onClick={resetValue}>Clear Filter</Button>
>>>>>>> main
        </FormControl>
      </Box>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {state.query === ""
          ? communities.map((community) => {
              return (
                <Grid item zeroMinWidth key={community.id}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })
          : state.list.map((community) => {
              return (
                <Grid item zeroMinWidth key={community.id}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })}

        {/* {communities.length > 0 &&
          (location
            ? communities
                .filter(community => community.state.includes(location))
                .map(community => (
                  <CommunityCard key={community.id} community={community} />
                ))
            : communities.map(community => (
                <CommunityCard key={community.id} community={community} />
              )))} */}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Community</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new community, provide a bio, location, and upload an
              image.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              name="name"
              {...register('name')}
              label="Community Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="bio"
              {...register('bio')}
              label="Bio"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="address"
              {...register('address')}
              label="Address"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="city"
              {...register('city')}
              label="City"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="state"
              {...register('state')}
              label="State"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="zipCode"
              {...register('zipCode')}
              label="Zipcode"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              type="file"
              name="imageUrl"
              accept=".jpg, .jpeg, .png"
              variant="outlined"
              onChange={e => {
                const file = e.target.files[0];
                setFile(file);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CommunityList;
