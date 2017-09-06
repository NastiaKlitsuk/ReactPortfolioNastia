import React, { Component } from 'react';
import './PortfolioItemDisplay.css';
import PropTypes from 'prop-types';

class PortfolioItemDisplay extends Component {
    render() {
        return (
            <div className="DisplayContainer">
                <h4 className="DisplayContainer">{this.props.title}</h4>
                <p>this.props.description</p>
                <div className="PortfolioImage">
                    <img src={this.props.imageUrl} />
                </div>
            </div>
        );
    }
}

PortfolioItemDisplay.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
}

export default PortfolioItemDisplay;