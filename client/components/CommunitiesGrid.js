import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCommunity, setCommunities, setGeography } from "../store";
import CommunityCard from "./CommunityCard";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";

const CommunitiesGrid = () => {
  const { communities, geographies, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCommunities());
  }, []);
  useEffect(() => {
    dispatch(setGeography());
  }, []);

  // Add Community Dialog
  const [open, setOpen] = React.useState(false);
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
    const community = { ...data, adminId: auth.id };
    console.log(community);
    dispatch(addCommunity(community));
    reset();
  };

  // Filter Category
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const resetValue = () => {
    setLocation("");
  };

  return (
    <div>
      <h1>Communities</h1>
      {auth.id && (
        <Button variant="outlined" onClick={handleClickOpen}>
          Add New Community
        </Button>
      )}
      <Box sx={{ minWidth: 120 }}>
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
      <Grid container spacing={2}>
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
              {...register("name")}
              label="Community Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="bio"
              {...register("bio")}
              label="Bio"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="address"
              {...register("address")}
              label="Address"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="city"
              {...register("city")}
              label="City"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="state"
              {...register("state")}
              label="State"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="zipCode"
              {...register("zipCode")}
              label="Zipcode"
              type="text"
              fullWidth
              variant="standard"
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

export default CommunitiesGrid;
