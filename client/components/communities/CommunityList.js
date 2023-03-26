import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setCommunities,
  setUserCommunities,
  me,
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
    const results = communities.filter((community) => {
      if (e.target.value === "") return community;
      return (
        community.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        community.city.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setstate({
      category: e.currentTarget.name,
      query: e.target.value,
      list: results,
    });
  };

  const handleClick = (category) => {
    let communitiesFiltered;
    if (state.list > 0) {
      communitiesFiltered = state.list;
    } else {
      communitiesFiltered = communities;
    }
    const results = communitiesFiltered.filter((community) => {
      if (category === "" || category === "All") return community;
      return community.category === category;
    });
    setstate({
      category: category,
      list: results,
    });
  };

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
      <Box display="flex" justifyContent="space-between" sx={{ mt: 5, mb: 5 }}>
        <Button
          variant="outlined"
          value={state.category}
          onClick={() => handleClick("All")}
        >
          All
        </Button>
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
      </Box>

      <Box sx={{ minWidth: 200, mt: 5, mb: 5 }}>
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
          ? communities?.map((community) => {
              return (
                <Grid item zeroMinWidth key={community.id}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })
          : state.list?.map((community) => {
              return (
                <Grid item zeroMinWidth key={community.id}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })}
      </Grid>
      <AddCommunity open={open} onClose={handleClose} />
    </div>
  );
};

export default CommunityList;
