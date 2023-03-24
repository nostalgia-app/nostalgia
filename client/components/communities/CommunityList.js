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

      <Box sx={{ minWidth: 200, mt: 10, mb: 10 }}>
        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Select
            value={location}
            label="State"
            defaultValue={location}
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
        {communities.length > 0 &&
          (location
            ? communities
                .filter((community) => community.state.includes(location))
                .map((community) => (
                  <CommunityCard key={community.id} community={community} />
                ))
            : communities.map((community) => (
                <CommunityCard key={community.id} community={community} />
              )))}
      </Grid>
      <AddCommunity open={open} onClose={handleClose} />
    </div>
  );
};

export default CommunityList;
