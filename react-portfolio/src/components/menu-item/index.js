import React, { Component } from 'react';
import './MenuItem.css';
import PropTypes from 'prop-types';

class MenuItem extends Component {
    render() {
        return (
            <a onClick={(event)=> {this.props.onMenuChanged(event, this.props.title)}}>
                {this.props.title}
            </a>
        );
    }
}

MenuItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onMenuChanged: PropTypes.func.isRequired
}

export default MenuItem;