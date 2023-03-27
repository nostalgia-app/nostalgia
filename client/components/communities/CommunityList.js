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
    paddingTop: 30,
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
    marginLeft: 10,
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
});

const CommunityList = () => {
  const classes = useStyles();
  const { communities, auth, geographies } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommunities());
  }, []);

  // useEffect(() => {
  //   dispatch(setGeography());
  // }, []);

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
      <Typography align="center" variant="h3" component="h1" gutterBottom>
        Find a Community!
      </Typography>
      {auth.id && (
        <Button className={classes.button} onClick={handleClickOpen}>
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
