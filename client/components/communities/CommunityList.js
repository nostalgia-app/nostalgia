import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Box,
  Grid,
  Button,
  Typography,
  makeStyles,
  FormControl,
  TextField,
} from '@material-ui/core';
import { setCommunities } from '../../store';
import CommunityCard from './CommunityCard';
import AddCommunity from './AddCommunity';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '.25rem',
    width: '30%',
  },

  addCommunity: {
    width: '50%',
    backgroundColor: 'rgb(115, 115, 115)',
    width: '200px',
    marginLeft: 10,
    '&:hover': {
      backgroundColor: 'white',
      color: '#1f2833',
    },
    marginTop: 5,
    color: 'white',
    fontWeight: 500,
  },
  search: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  communitiesGrid: {
    marginTop: 30,
    marginBottom: 50,
  },
  icon: {
    backgroundColor: '#1f2833',
    marginTop: 5,
    color: 'white',
    marginLeft: 10,
  },
});

const CommunityList = () => {
  const classes = useStyles();
  const { communities, auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommunities());
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
        community.city.toLowerCase().includes(e.target.value.toLowerCase())
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
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find a Community!
      </Typography>
      <Box display="flex" justifyContent="space-between" sx={{ mt: 5, mb: 5 }}>
        <Button
          className={classes.icon}
          variant="outlined"
          value={state.category}
          onClick={() => handleClick('All')}
        >
          All
        </Button>
        <Button
          className={classes.icon}
          variant="outlined"
          value={state.category}
          startIcon={<SportsBaseballIcon />}
          onClick={() => handleClick('Fitness & Sports')}
        >
          Sports
        </Button>
        <Button
          className={classes.icon}
          variant="outlined"
          value={state.category}
          startIcon={<MusicNoteIcon />}
          onClick={() => handleClick('Music & Audio')}
        >
          Music
        </Button>
        <Button
          className={classes.icon}
          variant="outlined"
          value={state.category}
          startIcon={<SchoolIcon />}
          onClick={() => handleClick('Education')}
        >
          Education
        </Button>
        <Button
          className={classes.icon}
          variant="outlined"
          value={state.category}
          startIcon={<FastfoodRoundedIcon />}
          onClick={() => handleClick('Food & Drink')}
        >
          Food & Drink
        </Button>
        <Button
          className={classes.icon}
          variant="outlined"
          value={state.category}
          startIcon={<ComputerIcon />}
          onClick={() => handleClick('Science & Tech')}
        >
          Tech
        </Button>
        <Button
          className={classes.icon}
          variant="outlined"
          value={state.category}
          startIcon={<BusinessCenterIcon />}
          onClick={() => handleClick('Business & Commerce')}
        >
          Business
        </Button>
      </Box>

      <Box className={classes.search} sx={{ minWidth: 200, mt: 5, mb: 5 }}>
        <FormControl fullWidth>
          <TextField
            className={classes.input}
            value={state.query}
            type="search"
            label="Location"
            variant="filled"
            onChange={handleChange}
          ></TextField>
        </FormControl>
      </Box>
      {auth.id && (
        <Button className={classes.addCommunity} onClick={handleClickOpen}>
          Add New Community
        </Button>
      )}
      <Grid className={classes.communitiesGrid} container spacing={3}>
        {state.query === ''
          ? communities.map(community => {
              return (
                <Grid item key={community.id} xs={12} sm={6} md={4}>
                  <CommunityCard key={community.id} community={community} />
                </Grid>
              );
            })
          : state.list.map(community => {
              return (
                <Grid item key={community.id} xs={12} sm={6} md={4}>
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
