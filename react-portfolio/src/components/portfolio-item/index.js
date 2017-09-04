import React, { Component } from 'react';
import './PortfolioItem.css';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
    render() {
        return (
            <div className="PortfolioItemContainer">
                <h3>{this.props.title}</h3>
                <img src={this.props.imageUrl} />
            </div>
        );
    }
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired
}

export default PortfolioItem;