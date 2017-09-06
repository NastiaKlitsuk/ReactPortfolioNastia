import React from 'react';
import './PortfolioItemDisplay.css';
import PropTypes from 'prop-types';

const PortfolioItemDisplay = (props) => {
    return (
        <div className="DisplayContainer">
            <h2 className="DispalyHeader">{props.title}</h2>
            <p>{props.description}</p>
            <div >
                <img src={props.imageUrl} alt="Sorry, the source is unavailable."/>
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