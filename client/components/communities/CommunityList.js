import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

import {
  addCommunity,
  setCommunities,
  setUserCommunities,
  me,
  createNewImage,
  addUserToCommunity,
} from "../../store";
import CommunityCard from "./CommunityCard";

import {
  Box,
  FormControl,
  Grid,
  Button,
  Typography,
  TextField,
  Avatar,
} from "@material-ui/core";
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ComputerIcon from "@material-ui/icons/Computer";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import SchoolIcon from "@material-ui/icons/School";
import AddCommunity from "./AddCommunity";

const CommunityList = () => {
  const { communities, auth, userCommunities } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);
  useEffect(() => {
    dispatch(setCommunities());
  }, []);

  useEffect(() => {
    dispatch(setUserCommunities(auth.id));
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Add Community Form
  const addUserCommunity = (comm, user) => {
    dispatch(addUserToCommunity(comm, user));
  };

  // Filter Category
  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    console.log(e.target.value, state.query);
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
  };

  // const handleClick = (category) => {
  //   const results = communities.filter((community) => {
  //     if (category === "") return community;
  //     return community.category === category;
  //   });
  //   setstate({
  //     category: category,
  //     list: results,
  //   });
  // };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography align="left" variant="h3" component="h1" gutterBottom>
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
      {/* <Box display="flex" justifyContent="space-between" sx={{ mt: 5, mb: 5 }}>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<SportsBaseballIcon />}
          onClick={() => handleClick("Fitness & Sports")}
        >
          Sports
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<MusicNoteIcon />}
          onClick={() => handleClick("Music & Audio")}
        >
          Music
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<SchoolIcon />}
          onClick={() => handleClick("Education")}
        >
          Education
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<FastfoodRoundedIcon />}
          onClick={() => handleClick("Food & Drink")}
        >
          Food & Drink
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<ComputerIcon />}
          onClick={() => handleClick("Science & Tech")}
        >
          Tech
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<BusinessCenterIcon />}
          onClick={() => handleClick("Business & Commerce")}
        >
          Business
        </Button>
      </Box> */}

      <Box sx={{ minWidth: 200, mt: 10, mb: 10 }}>
        <FormControl fullWidth>
          <TextField
            value={state.query}
            type="search"
            label="Location"
            onChange={handleChange}
          ></TextField>
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
                .filter((community) => community.state.includes(location))
                .map((community) => (
                  <CommunityCard key={community.id} community={community} />
                ))
            : communities.map((community) => (
                <CommunityCard key={community.id} community={community} />
              )))} */}
      </Grid>
      <AddCommunity open={open} onClose={handleClose} />
    </div>
  );
};

export default CommunityList;
