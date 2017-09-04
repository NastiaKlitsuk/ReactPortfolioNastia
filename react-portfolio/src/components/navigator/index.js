import React, { Component } from 'react';
import Share from '../share';
import './Navigator.css';
import Menu from '../menu';

class Navigator extends Component {
  render() {
    return (
      <div className="Navbar">
        <img className="Logo" src={require('./images/nature.png')} alt="Nature" />
        <Menu />
        <Share />
      </div>
    );
  }
}

export default Navigator;