import React  from 'react';
import Share from '../share';
import './Navigator.css';
import Menu from '../menu';
import PropTypes from 'prop-types';

const Navigator = (props) => {
  return (
    <div className="Navbar">
      <img className="Logo" src={require('./images/nature.png')} alt="Nature" />
      <Menu onMenuChanged={props.onMenuChanged} />
      <Share />
    </div>
  );
}

Navigator.propTypes = {
  onMenuChanged: PropTypes.func.isRequired
}

export default Navigator;