import React from 'react';
import { Link } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">App Root</Link>
        <Link to="/login">Log in</Link>
        <Link to="/users">Users</Link>
        <Link to="/create-user">Create User</Link>
        <Link to="/communities">Communities</Link>
      </div>

      <Routes />
    </div>
  );
};

export default App;
