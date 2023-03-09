import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/users/AuthForm';
import Home from './components/Home';
import { me } from './store';
import CommunitiesGrid from './components/communities/CommunitiesGrid';
import CommunityDetails from './components/communities/CommunityDetails';
import CreateUser from './components/users/CreateUSer';
import UpdateUser from './components/users/UpdateUser';
import UserDetails from './components/users/UserDetails';
import Users from './components/users/Users';

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={UserDetails} />
        <Route exact path="/create-user" component={CreateUser} />
        <Route exact path="/update-user" component={UpdateUser} />
        <Route exact path="/communities" component={CommunitiesGrid} />
        <Route exact path="/communities-details" component={CommunityDetails} />

        {/* {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )} */}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
