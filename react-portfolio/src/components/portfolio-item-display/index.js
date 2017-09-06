import React, { Component } from 'react';
import './PortfolioItemDisplay.css';
import PropTypes from 'prop-types';

const PortfolioItemDisplay = (props) => {
    return (
        <div className="DisplayContainer">
            <h4 className="DisplayContainer">{props.title}</h4>
            <p>props.description</p>
            <div className="PortfolioImage">
                <img src={props.imageUrl} />
            </div>
        </div>
    );
}

PortfolioItemDisplay.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
}

export default PortfolioItemDisplay;