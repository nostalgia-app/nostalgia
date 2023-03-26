import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Button,
  Typography,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { setCommunities } from '../../store';
import CommunityCard from './CommunityCard';
import AddCommunity from './AddCommunity';

const useStyles = makeStyles({
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '.25rem',
    width: '30%',
  },
  button: {
    backgroundColor: '#1f2833',
    border: '2pt solid #66FCf1',
    marginTop: 5,
    color: 'white',
  },
  search: {
    marginTop: 20,
    marginBottom: 20,
  },
  communitiesGrid: {},
});

const CommunityList = () => {
  const classes = useStyles();
  const { communities, auth } = useSelector(state => state);
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

  // Filter Category
  const [state, setstate] = useState({
    query: '',
    list: [],
  });

  const handleChange = e => {
    const results = communities.filter(community => {
      if (e.target.value === '') return community;
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
    <Container className={classes.container}>
      {/* <Box display="flex" justifyContent="space-between" alignItems="center"> */}
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find a Community!
      </Typography>
      {auth.id && (
        <Button className={classes.button} onClick={handleClickOpen}>
          Add New Community
        </Button>
      )}
      {/* </Box> */}

      {/* <Box sx={{ minWidth: 200, mt: 10, mb: 10 }}> */}
      <Grid className={classes.search}>
        <FormControl fullWidth>
          <TextField
            className={classes.input}
            variant="outlined"
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
      </Grid>

      {/* </Box> */}

      {/* // Modified version */}
      <Grid container spacing={3}>
        {state.query === ''
          ? communities.map(community => {
              return (
                <Grid item key={community.id} xs={12} sm={4} md={4}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })
          : state.list.map(community => {
              return (
                <Grid item key={community.id} xs={12} sm={4} md={4}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })}
      </Grid>

      <AddCommunity open={open} onClose={handleClose} />
    </Container>
  );
};

export default CommunityList;
