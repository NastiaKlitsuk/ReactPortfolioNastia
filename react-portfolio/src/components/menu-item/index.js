import React, { Component } from 'react';
import './MenuItem.css';
import PropTypes from 'prop-types';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick() {
        alert(this.props.title);
    }

    render() {
        return (
            <a onClick={this.onMenuClick}>
                {this.props.title}
            </a>
        );
    }
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default MenuItem;