import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCommunity } from '../../store';
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
} from '@material-ui/core';

const EditCommunity = ({ community, open, onClose }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ community });
  const [file, setFile] = useState();

  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const communityId = data.id;
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    formData.append('file', file);
    dispatch(updateCommunity(formData, communityId));
  };

  useEffect(() => {
    if (community) {
      setData({ ...community });
    }
  }, [community]);

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Update Community</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update a community, please complete all fields: provide a bio, a
            location, and a profile image.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            name="name"
            defaultValue={data.name}
            onChange={handleChange}
            label="Community Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="bio"
            defaultValue={data.bio}
            onChange={handleChange}
            label="Bio"
            type="text"
            fullWidth
            multiline
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="address"
            defaultValue={data.address}
            onChange={handleChange}
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="city"
            defaultValue={data.city}
            onChange={handleChange}
            label="City"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="state"
            defaultValue={data.state}
            onChange={handleChange}
            label="State"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="zipCode"
            defaultValue={data.zipCode}
            onChange={handleChange}
            label="Zip Code"
            type="text"
            fullWidth
            variant="standard"
          />
          <Box sx={{ mt: 1 }}>
            <Typography variant="caption" display="block" gutterBottom>
              Community Profile Picture
            </Typography>
          </Box>
          <TextField
            type="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            variant="outlined"
            fullWidth
            onChange={e => {
              const file = e.target.files[0];
              setFile(file);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose} type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditCommunity;
