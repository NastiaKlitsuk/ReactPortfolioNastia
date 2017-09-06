import React, { Component } from 'react';
import Share from '../share';
import './Navigator.css';
import Menu from '../menu';
import PropTypes from 'prop-types';

class Navigator extends Component {
  render() {
    return (
      <div className="Navbar">
        <img className="Logo" src={require('./images/nature.png')} alt="Nature" />
        <Menu onMenuChanged={this.props.onMenuChanged.bind(this)}/>
        <Share />
      </div>
    );
  }
}

Navigator.propTypes = {
    onMenuChanged: PropTypes.func.isRequired
}

export default Navigator;