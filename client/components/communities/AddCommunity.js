import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommunity } from "../../store";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box,
} from "@material-ui/core";

const AddCommunity = ({ open, onClose }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    bio: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    formData.append("file", file);
    formData.append("adminId", auth.id);
    dispatch(addCommunity(formData));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Community</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new community, provide a bio, location, and upload an
            image.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            name="name"
            onChange={handleChange}
            label="Community Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="bio"
            onChange={handleChange}
            label="Bio"
            type="text"
            fullWidth
            multiline
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="address"
            onChange={handleChange}
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="city"
            onChange={handleChange}
            label="City"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="state"
            onChange={handleChange}
            label="State"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            name="zipCode"
            onChange={handleChange}
            label="Zip Code"
            type="text"
            fullWidth
            variant="standard"
          />
          <Box sx={{ mt: 1 }}>
            <Typography variant="caption" display="block" gutterBottom>
              Community Profile Picture &#x2A;
            </Typography>
          </Box>
          <TextField
            required
            type="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              const file = e.target.files[0];
              setFile(file);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddCommunity;
