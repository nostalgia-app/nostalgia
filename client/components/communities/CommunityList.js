import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { setCommunities, setGeography } from "../../store";
import CommunityCard from "./CommunityCard";
import AddCommunity from "./AddCommunity";

const CommunityList = () => {
  const { communities, geographies, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommunities());
  }, []);

  useEffect(() => {
    dispatch(setGeography());
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const resetValue = () => {
    setLocation("");
  };

  const handleClick = category => {
    let communitiesFiltered;
    if (state.list > 0) {
      communitiesFiltered = state.list;
    } else {
      communitiesFiltered = communities;
    }
    const results = communitiesFiltered.filter(community => {
      if (category === '' || category === 'All') return community;
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
          onClick={() => handleClick('All')}
        >
          All
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<SportsBaseballIcon />}
          onClick={() => handleClick('Fitness & Sports')}
        >
          Sports
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<MusicNoteIcon />}
          onClick={() => handleClick('Music & Audio')}
        >
          Music
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<SchoolIcon />}
          onClick={() => handleClick('Education')}
        >
          Education
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<FastfoodRoundedIcon />}
          onClick={() => handleClick('Food & Drink')}
        >
          Food & Drink
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<ComputerIcon />}
          onClick={() => handleClick('Science & Tech')}
        >
          Tech
        </Button>
        <Button
          variant="outlined"
          value={state.category}
          startIcon={<BusinessCenterIcon />}
          onClick={() => handleClick('Business & Commerce')}
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
          >
            {geographies.length > 0 ? (
              geographies.map((geography) => (
                <MenuItem key={geography.state} value={geography.state}>
                  {geography.state}
                </MenuItem>
              ))
            ) : (
              <MenuItem>No Items to Select</MenuItem>
            )}
          </Select>
          <Button onClick={resetValue}>Clear Filter</Button>
        </FormControl>
      </Box>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {state.query === ''
          ? communities.map(community => {
              return (
                <Grid item zeroMinWidth key={community.id}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })
          : state.list.map(community => {
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
