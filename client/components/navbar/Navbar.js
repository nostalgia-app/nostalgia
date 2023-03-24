import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Button } from '@material-ui/core';
import { logout } from '../../store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import './navbar.css';

// BEM = Block Element Modifier

// Reusable Menu links to use in our NavBar - also in ternary for mobile
const Menu = () => (
  <>
    <p>
      <a href="/">Home</a>
    </p>
    <p>
      <a href="/communities">Communities</a>
    </p>
    <p>
      <a href="/findfriends">Find Friends</a>
    </p>
    <p>
      <a href="myfriends">My Friends</a>
    </p>

    {/* <p>
      <a href="/create-user">Create Account</a>
    </p>
    <p>
      <a href="/login">Log in</a>
    </p> */}
  </>
);

const Navbar = ({ auth }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout);
    window.location.reload();
  };
  const myAccount = () => {
    history.push(`/users/${auth.id}`);
  };

  return (
    <div className="nostalgia__navbar">
      <div className="nostalgia__navbar-links">
        <div className="nostalgia__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="nostalgia__navbar-sign">
        {auth.id ? (
          <Link to="login" onClick={handleLogout}>
            <p>Sign Out</p>
          </Link>
        ) : (
          <Link to="login">
            <p>Sign In</p>
          </Link>
        )}
        {auth.id ? (
          <Button variant="outlined" color="primary" onClick={myAccount}>
            My Account
          </Button>
        ) : (
          <Link to="create-user">
            <Button variant="outlined" color="primary">
              Sign Up
            </Button>
          </Link>
        )}

        {/* <button type="button">Sign Up</button> */}
      </div>
      {/* // Create our Menu toggle feature - ternary using the 'Ri' icons - uses 'toggleMenu' state - classNames set the style with the animation */}
      <div className="nostalgia__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nostalgia__navbar-menu_container scale-up-center">
            <div className="nostalgia__navbar-menu_container-links">
              <Menu id={auth.id} />
              <div className="nostalgia__navbar-menu_container-links-sign">
                {auth.id ? (
                  <Link to="login" onClick={handleLogout}>
                    <p>Sign Out</p>
                  </Link>
                ) : (
                  <Link to="login">
                    <p>Sign In</p>
                  </Link>
                )}
                {/* <button type="button">Sign Up</button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
