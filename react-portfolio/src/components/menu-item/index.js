import React, { Component } from 'react';
import './MenuItem.css';
import PropTypes from 'prop-types';

class MenuItem extends Component {
    render() {
        //alert('in menu-item render');

        return (
            <a onClick={()=> {this.props.onSelected(this.props.id)}}>
                {this.props.title}
            </a>
        );
    }
}

MenuItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onSelected: PropTypes.func.isRequired
}

export default MenuItem;