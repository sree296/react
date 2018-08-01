import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Header/Header.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


class Header extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default Header;