import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { me } from './store';
import { Login } from './components/users/Login';
import Home from './components/Home';
import CommunityList from './components/communities/CommunityList';
import CommunityDetails from './components/communities/CommunityDetails';
import CreateUser from './components/users/CreateUser';
import UpdateUser from './components/users/UpdateUser';
import UserProfile from './components/users/UserProfile';
import Success from './components/users/Success';
import ArtifactList from './components/artifacts/ArtifactList';
import ArtifactDetails from './components/artifacts/ArtifactDetails';
import FriendsList from './components/friends/FriendsList';
import MyFriendsList from './components/friends/MyFriendsList';
import NotFound from './components/NotFound';

function Routes() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const loadInitialData = () => dispatch(me());
  const isLoggedIn = !!auth.id;

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exact path="/myfriends" component={MyFriendsList} />
        <Route exact path="/findfriends" component={FriendsList} />
        <Route exact path="/friends" component={FriendsList} />
        <Route exact path="/create-user" component={CreateUser} />
        <Route exact path="/users/:id/update-user" component={UpdateUser} />
        <Route exact path="/users-success" component={Success} />
        <Route exact path="/communities" component={CommunityList} />
        <Route exact path="/communities/:id" component={CommunityDetails} />
        <Route exact path="/artifacts" component={ArtifactList} />
        <Route exact path="/artifacts/:id" component={ArtifactDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routes;
