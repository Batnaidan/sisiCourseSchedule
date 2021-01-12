import React, { Component } from 'react';
import headerLogo from '../images/logo.png';
import './Header.css';

export default class Header extends Component {
  state = {};
  render() {
    return (
      <div id="header-container">
        <img src={headerLogo} alt="header logo"></img>
      </div>
    );
  }
}
