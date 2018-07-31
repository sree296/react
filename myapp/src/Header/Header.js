import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Header/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Sreenivas</h1>
      </div>
    );
  }
}

export default Header;