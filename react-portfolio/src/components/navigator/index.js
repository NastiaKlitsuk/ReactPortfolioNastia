import React, { Component } from 'react';
import Share from '../share';
import './Navigator.css';

class Navigator extends Component {
  render() {
    return (
      <div className="Navbar">
          <Share/>
      </div>
    );
  }
}

export default Navigator;