import React from 'react';
import './MenuItem.css';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
    return (
        <a onClick={(event) => { props.onMenuChanged(event, props.title) }}>
            {props.title}
        </a>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    onMenuChanged: PropTypes.func.isRequired
}

export default MenuItem;