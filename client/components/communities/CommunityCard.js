import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { me } from '../../store';

import { addUserToCommunity } from '../../store';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  Grid,
  CardActionArea,
  Typography,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CommunityCard = (props) => {
  const dispatch = useDispatch()
  const { community } = props;

  const history = useHistory();
  const routeChange = () => {
    let path = `/communities/${community.id}`;
    history.push(path);
  };
  useEffect(() => {
    dispatch(me());
  }, []);
  const { auth } = useSelector(state => state);

  const addCommunity =(comm, user)=>{
    dispatch(addUserToCommunity(comm, user))

  }
  return (
    <Grid item zeroMinWidth key={community.id}>
      <Card
        elevation={3}
        style={{
          color: "black",
          padding: 10,
          marginLeft: 20,
          width: 350,
          height: 350,
        }}
      >
        <CardActionArea>
          <Link to={`/communities/${community.id}`}>
            <CardMedia
              src={community.imageUrl}
              component="img"
              height="250"
              width="250"
              sx={{ padding: "1em 1em 0 1em" }}
            />
            <Typography align="center" style={{ overflowWrap: "break-word" }}>
              {community.name}
            </Typography>
          </Link>
        </CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Button variant="contained" sx={{ borderRadius: 50 }} onClick ={()=>addCommunity(community.id,auth.id)} >
              Join
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: 50 }}
              onClick={routeChange}
            >
              Learn
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CommunityCard;
