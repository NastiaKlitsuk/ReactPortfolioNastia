import React, { Component } from 'react';
import './PortfolioItem.css';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
    render() {
        return (
            <div className="PortfolioItemContainer">
                <img className="PortfolioImage" src={this.props.imageUrl} />
                <div className="Seperator" />
                <h3>{this.props.title}</h3>
                <button className="Remove" onClick={(event) => { this.props.onRemovePortfolioItem(event, this.props.id) }} />
                <button className="Edit" onClick={(event) => {
                    this.props.onEditPortfolioItem(event, this.props.id,
                        this.props.title,
                        this.props.imageUrl,
                        this.props.description)
                }} />
            </div>
        );
    }
}

PortfolioItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    onRemovePortfolioItem: PropTypes.func.isRequired,
    onEditPortfolioItem: PropTypes.func.isRequired
}

export default PortfolioItem;