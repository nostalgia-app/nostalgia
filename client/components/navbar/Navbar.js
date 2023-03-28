import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Button, makeStyles } from '@material-ui/core';
import { logout } from '../../store';

const useStyles = makeStyles({
  button: {
    border: '2pt solid #66FCF1',
    color: '#66FCF1',
  },
  menuButton: {
    color: '#66FCF1',
  },
});

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
  </>
);

const Navbar = ({ auth }) => {
  const classes = useStyles();
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
          <Link to="/login" onClick={handleLogout}>
            <p>Sign Out</p>
          </Link>
        ) : (
          <Link to="/login">
            <p>Sign In</p>
          </Link>
        )}
        {auth.id ? (
          <Button
            className={classes.button}
            variant="outlined"
            onClick={myAccount}
          >
            My Account
          </Button>
        ) : (
          <Link to="create-user">
            <Button className={classes.button} variant="outlined">
              Sign Up
            </Button>
          </Link>
        )}
      </div>
      <div className="nostalgia__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#66FCF1"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#66FCF1"
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
                  <Link to="/login" onClick={handleLogout}>
                    <p>Sign Out</p>
                  </Link>
                ) : (
                  <Link to="/login">
                    <p className={classes.menuButton}>Sign In</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
