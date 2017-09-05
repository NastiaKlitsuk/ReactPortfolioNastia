import React, { Component } from 'react';
import './PortfolioItem.css';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //alert('PortfolioItem render');

        return (
            <div className="PortfolioItemContainer">
                <img className="PortfolioImage" src={this.props.imageUrl} />
                <div className="Seperator" />
                <h3>{this.props.title}</h3>
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