<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/users/Login";
import { Home } from "./components/Home";
import { me } from "./store";
import CommunityList from "./components/communities/CommunityList";
import CommunityDetails from "./components/communities/CommunityDetails";
import CreateUser from "./components/users/CreateUSer";
import UpdateUser from "./components/users/UpdateUser";
import UserDetails from "./components/users/UserDetails";
import FriendsList from "./components/friends/FriendsList";
import MyFriendsList from "./components/friends/MyFriendsList";
import FriendProfile from "./components/friends/FriendProfile";
import ArtifactList from "./components/artifacts/ArtifactList";
import ArtifactDetails from "./components/artifacts/ArtifactDetails";
=======
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/users/Login';
import { Home } from './components/Home';
import { me } from './store';
import CommunityList from './components/communities/CommunityList';
import CommunityDetails from './components/communities/CommunityDetails';
import CreateUser from './components/users/CreateUSer';
import UpdateUser from './components/users/UpdateUser';
import UserProfile from './components/users/UserProfile';
import Success from './components/users/Success';
import Users from './components/users/UsersList';
import ArtifactList from './components/artifacts/ArtifactList';
import ArtifactDetails from './components/artifacts/ArtifactDetails';

>>>>>>> main
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <Route exact path="/" component={Home} />
<<<<<<< HEAD
        <Route exact path="/users/:id" component={UserDetails} />
        <Route exact path="/myfriends" component={MyFriendsList} />
        <Route exact path="/findfriends" component={FriendsList} />
        <Route exact path="/friends" component={FriendsList} />
        <Route exact path="/friends/:id" component={FriendProfile} />
=======
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={UserProfile} />
>>>>>>> main
        <Route exact path="/create-user" component={CreateUser} />
        <Route exact path="/users/:id/update-user" component={UpdateUser} />
        <Route exact path="/users-success" component={Success} />
        <Route exact path="/communities" component={CommunityList} />
        <Route exact path="/communities/:id" component={CommunityDetails} />
        <Route exact path="/artifacts" component={ArtifactList} />
        <Route exact path="/artifacts/:id" component={ArtifactDetails} />

        <Route exact path="/login" component={Login} />

        {/* {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/communities" element={CommunitiesGrid} />
            <Route path="/communities/:id" component={CommunityPage} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/communities" component={CommunitiesGrid} />
            <Route path="/communities/:id" component={CommunityPage} />
          </Switch>
        )} */}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
