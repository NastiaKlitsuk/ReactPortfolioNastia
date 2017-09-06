import React, { Component } from 'react';
import './PortfolioItem.css';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
    render() {
        //alert('PortfolioItem render');
        return (
            <div className="PortfolioItemContainer">
                <img className="PortfolioImage" src={this.props.imageUrl} />
                <div className="Seperator" />
                <h3>{this.props.title}</h3>
                <button className="Remove" onClick={() => { this.props.onRemovePortfolioItem(this.props.id) }} />
                <button className="Edit" onClick={() => {
                    this.props.onEditPortfolioItem(this.props.id,
                        this.props.title,
                        this.props.imageUrl,
                        this.props.description)
                }} />
            </div>
        );
    }
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
}

export default PortfolioItem;